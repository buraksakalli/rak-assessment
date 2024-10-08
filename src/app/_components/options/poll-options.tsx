import { motion, AnimatePresence } from "framer-motion";

import { usePoll } from "../../_contexts";

import { pollQuestions } from "@/app/_utils/poll-questions";

export const PollOptions = () => {
  const { state, dispatch } = usePoll();
  const { currentStep, answers, hoveredOption } = state;
  const question = pollQuestions[currentStep];

  const handleOptionSelect = (questionId: number, label: string) => {
    dispatch({ type: "SELECT_OPTION", questionId, label });
    setTimeout(() => {
      dispatch({ type: "NEXT_STEP" });
    }, 300);
  };

  const setHoveredOption = (option: string | null) => {
    dispatch({ type: "SET_HOVERED_OPTION", option });
  };

  return (
    <AnimatePresence key={currentStep}>
      <motion.div
        className="flex items-center gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        {question.options.map((option) => (
          <motion.div
            key={option.emoji}
            className="flex items-center gap-x-4 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleOptionSelect(question.id, option.label)}
            onHoverStart={() => setHoveredOption(option.emoji)}
            onHoverEnd={() => setHoveredOption(null)}
          >
            <span className="text-6xl">{option.emoji}</span>
            <AnimatePresence>
              {(hoveredOption === option.emoji ||
                answers[question.id] === option.label) && (
                <motion.span
                  className="text-2xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {option.label}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
