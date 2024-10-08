import { AnimatePresence, motion } from "framer-motion";

import { PollCompletion, PollPagination } from "../../_components";
import { pollQuestions } from "@/app/_utils/poll-questions";

export const LeftPanel = ({
  isLastStep,
  currentStep,
}: {
  isLastStep: boolean;
  currentStep: number;
}) => {
  return (
    <motion.div
      className="w-full lg:w-1/3 bg-rak p-8 flex items-center gap-12"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {!isLastStep && <PollPagination />}
      <AnimatePresence key={currentStep}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {!isLastStep ? (
            <h2 className="text-6xl mb-8 font-bold">
              {pollQuestions[currentStep].title}
            </h2>
          ) : (
            <PollCompletion />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};
