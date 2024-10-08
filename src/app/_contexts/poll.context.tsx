import { createContext, useReducer, useContext, ReactNode } from "react";

type PollState = {
  currentStep: number;
  answers: Record<number, string>;
  hoveredOption: string | null;
};

type PollAction =
  | { type: "SELECT_OPTION"; questionId: number; label: string }
  | { type: "NEXT_STEP" }
  | { type: "RESTART" }
  | { type: "SET_HOVERED_OPTION"; option: string | null };

const initialState: PollState = {
  currentStep: 0,
  answers: {},
  hoveredOption: null,
};

const pollReducer = (state: PollState, action: PollAction): PollState => {
  switch (action.type) {
    case "SELECT_OPTION":
      return {
        ...state,
        answers: { ...state.answers, [action.questionId]: action.label },
      };
    case "NEXT_STEP":
      return { ...state, currentStep: state.currentStep + 1 };
    case "RESTART":
      return initialState;
    case "SET_HOVERED_OPTION":
      return { ...state, hoveredOption: action.option };
    default:
      return state;
  }
};

const PollContext = createContext<{
  state: PollState;
  dispatch: React.Dispatch<PollAction>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

export const usePoll = () => useContext(PollContext);

export const PollProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(pollReducer, initialState);

  return (
    <PollContext.Provider value={{ state, dispatch }}>
      {children}
    </PollContext.Provider>
  );
};
