import { render, screen, fireEvent } from "@testing-library/react";

import { PollOptions } from "./poll-options";

import { pollQuestions } from "@/app/_utils/poll-questions";

jest.mock("../../_contexts", () => ({
  usePoll: jest.fn(),
}));

describe("PollOptions Component", () => {
  it("renders the options for the current step", () => {
    const mockUsePoll = require("../../_contexts").usePoll;
    mockUsePoll.mockReturnValue({
      state: {
        currentStep: 0,
        answers: {},
      },
      dispatch: jest.fn(),
    });

    render(<PollOptions />);

    pollQuestions[0].options.forEach((option) => {
      expect(screen.getByText(option.emoji)).toBeInTheDocument();
    });
  });

  it("dispatches SELECT_OPTION when an option is clicked", () => {
    const mockDispatch = jest.fn();
    const mockUsePoll = require("../../_contexts").usePoll;
    mockUsePoll.mockReturnValue({
      state: {
        currentStep: 0,
        answers: {},
      },
      dispatch: mockDispatch,
    });

    render(<PollOptions />);

    const option = pollQuestions[0].options[0];

    fireEvent.click(screen.getByText(option.emoji));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "SELECT_OPTION",
      questionId: pollQuestions[0].id,
      label: option.label,
    });
  });
});
