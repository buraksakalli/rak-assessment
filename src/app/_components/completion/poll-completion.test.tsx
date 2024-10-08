import { render, screen, fireEvent } from "@testing-library/react";
import { PollCompletion } from "./poll-completion";

jest.mock("../../_contexts", () => ({
  usePoll: jest.fn(),
}));

describe("PollCompletion Component", () => {
  it("renders the completion message", () => {
    const mockUsePoll = require("../../_contexts").usePoll;

    mockUsePoll.mockReturnValue({
      dispatch: jest.fn(),
    });

    render(<PollCompletion />);

    expect(
      screen.getByText("You have completed the poll!")
    ).toBeInTheDocument();
  });

  it("dispatches RESTART action when the button is clicked", () => {
    const mockDispatch = jest.fn();
    const mockUsePoll = require("../../_contexts").usePoll;

    mockUsePoll.mockReturnValue({
      dispatch: mockDispatch,
    });

    render(<PollCompletion />);

    const button = screen.getByText("Restart");

    fireEvent.click(button);

    expect(mockDispatch).toHaveBeenCalledWith({ type: "RESTART" });
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});
