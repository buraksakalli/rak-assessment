import { render, screen, fireEvent } from "@testing-library/react";
import { Poll } from "./poll";

jest.mock("../../_contexts", () => ({
  usePoll: jest.fn(),
}));

jest.mock("../../_components", () => ({
  PollOptions: jest.fn(() => (
    <div data-testid="poll-options">Poll Options Mock</div>
  )),
  PollSummary: jest.fn(({ save }) => (
    <div data-testid="poll-summary">
      Poll Summary Mock
      <button onClick={() => save({})}>Save Poll</button>
    </div>
  )),
}));

jest.mock("../left-panel/left-panel", () => ({
  LeftPanel: jest.fn(() => <div data-testid="left-panel">Left Panel Mock</div>),
}));

describe("Poll Component", () => {
  it("renders PollOptions and LeftPanel when not at the last step", () => {
    const mockUsePoll = require("../../_contexts").usePoll;
    mockUsePoll.mockReturnValue({
      state: { currentStep: 0 },
    });

    const mockSavePoll = jest.fn();

    render(<Poll savePoll={mockSavePoll} />);

    expect(screen.getByTestId("left-panel")).toBeInTheDocument();

    expect(screen.getByTestId("poll-options")).toBeInTheDocument();

    expect(screen.queryByTestId("poll-summary")).not.toBeInTheDocument();
  });

  it("renders PollSummary and LeftPanel when at the last step", () => {
    const mockUsePoll = require("../../_contexts").usePoll;
    mockUsePoll.mockReturnValue({
      state: { currentStep: 3 },
    });

    const mockSavePoll = jest.fn();

    render(<Poll savePoll={mockSavePoll} />);

    expect(screen.getByTestId("left-panel")).toBeInTheDocument();

    expect(screen.getByTestId("poll-summary")).toBeInTheDocument();

    expect(screen.queryByTestId("poll-options")).not.toBeInTheDocument();
  });

  it("passes savePoll function to PollSummary and calls it on save", () => {
    const mockUsePoll = require("../../_contexts").usePoll;
    mockUsePoll.mockReturnValue({
      state: { currentStep: 3 },
    });

    const mockSavePoll = jest.fn();

    render(<Poll savePoll={mockSavePoll} />);

    expect(screen.getByTestId("poll-summary")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Save Poll"));

    expect(mockSavePoll).toHaveBeenCalledTimes(1);

    expect(mockSavePoll).toHaveBeenCalledWith({});
  });
});
