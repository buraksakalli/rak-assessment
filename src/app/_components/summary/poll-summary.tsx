import { useEffect } from "react";
import { motion } from "framer-motion";

import { usePoll } from "../../_contexts";

import { pollQuestions } from "@/app/_utils/poll-questions";

type PollSummaryProps = {
  save: (data: any) => Promise<any>;
};

export const PollSummary: React.FC<PollSummaryProps> = ({ save }) => {
  const { state } = usePoll();
  const { answers } = state;

  useEffect(() => {
    // Server actions
    save({ answers });

    // client side API call
    // fetch(`/api/poll`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ answers }),
    // });
  }, [save, answers]);

  return (
    <motion.div
      className="w-full"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <h2 className="text-3xl font-bold mb-6">Summary</h2>
      {pollQuestions.map((question) => (
        <div key={question.id} className="mb-4">
          <h3 className="text-xl font-semibold">{question.title}</h3>
          <p className="text-lg">
            Your answer: {answers[question.id] || "Not answered"}
          </p>
        </div>
      ))}
    </motion.div>
  );
};
