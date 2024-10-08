import { AnimatePresence, motion } from "framer-motion";

import { pollQuestions } from "@/app/_utils/poll-questions";
import { usePoll } from "../../_contexts";

export const PollPagination = () => {
  const {
    state: { currentStep },
  } = usePoll();

  return (
    <div className="space-y-4">
      <AnimatePresence key={currentStep}>
        {pollQuestions.map((question, index) => (
          <motion.div
            key={question.id}
            className={`flex items-center space-x-4 ${
              index === currentStep ? "text-white" : "text-rak-900"
            }`}
            animate={{ opacity: index <= currentStep ? 1 : 0.5 }}
          >
            <motion.div
              data-testid={`pagination-dot-${index}`}
              className={`w-4 h-4 rounded-full ${
                index === currentStep
                  ? "border-2 border-rak-900 bg-rak"
                  : "bg-white"
              }`}
              animate={{ scale: index === currentStep ? 1.2 : 1 }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
