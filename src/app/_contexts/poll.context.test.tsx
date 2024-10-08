import { renderHook, act } from "@testing-library/react";

import { PollProvider, usePoll } from "./poll.context";
import { pollQuestions } from "../_utils";

describe("PollContext", () => {
  it("should initialize with the first step", () => {
    const { result } = renderHook(() => usePoll(), { wrapper: PollProvider });
    expect(result.current.state.currentStep).toBe(0);
    expect(result.current.state.answers).toEqual({});
    expect(result.current.state.hoveredOption).toBeNull();
  });

  it("should select an option and move to the next step", () => {
    const { result } = renderHook(() => usePoll(), { wrapper: PollProvider });

    act(() => {
      result.current.dispatch({
        type: "SELECT_OPTION",
        questionId: pollQuestions[0].id,
        label: "Option 1",
      });
    });
    expect(result.current.state.answers[pollQuestions[0].id]).toBe("Option 1");

    act(() => {
      result.current.dispatch({ type: "NEXT_STEP" });
    });
    expect(result.current.state.currentStep).toBe(1);
  });

  it("should restart the poll", () => {
    const { result } = renderHook(() => usePoll(), { wrapper: PollProvider });

    act(() => {
      result.current.dispatch({
        type: "SELECT_OPTION",
        questionId: pollQuestions[0].id,
        label: "Option 1",
      });
    });
    act(() => {
      result.current.dispatch({ type: "RESTART" });
    });

    expect(result.current.state.currentStep).toBe(0);
    expect(result.current.state.answers).toEqual({});
    expect(result.current.state.hoveredOption).toBeNull();
  });
});
