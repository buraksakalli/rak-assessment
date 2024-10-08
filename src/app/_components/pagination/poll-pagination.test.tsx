import { render, screen } from "@testing-library/react";

import { PollPagination } from "./poll-pagination";
import { pollQuestions } from "@/app/_utils/poll-questions";

jest.mock("../../_contexts", () => ({
  usePoll: jest.fn(),
}));

describe("PollPagination Component", () => {
  it("renders the correct number of pagination dots", () => {
    const mockUsePoll = require("../../_contexts").usePoll;
    mockUsePoll.mockReturnValue({
      state: { currentStep: 0 },
    });

    render(<PollPagination />);

    const paginationDots = screen.getAllByTestId(/^pagination-dot-/);
    expect(paginationDots.length).toBe(pollQuestions.length);
  });
});
