import { render, screen } from "@testing-library/react";

import { LeftPanel } from "./left-panel";

import { pollQuestions } from "@/app/_utils/poll-questions";

jest.mock("../../_components", () => ({
  PollPagination: jest.fn(() => (
    <div data-testid="poll-pagination">Poll Pagination Mock</div>
  )),
  PollCompletion: jest.fn(() => (
    <div data-testid="poll-completion">Poll Completion Mock</div>
  )),
}));

jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe("LeftPanel Component", () => {
  it("renders PollPagination and the current question title when not the last step", () => {
    render(<LeftPanel isLastStep={false} currentStep={1} />);

    expect(screen.getByTestId("poll-pagination")).toBeInTheDocument();

    expect(screen.getByText(pollQuestions[1].title)).toBeInTheDocument();
  });

  it("renders PollCompletion when it is the last step", () => {
    render(<LeftPanel isLastStep={true} currentStep={2} />);

    expect(screen.getByTestId("poll-completion")).toBeInTheDocument();

    expect(screen.queryByTestId("poll-pagination")).not.toBeInTheDocument();
  });
});
