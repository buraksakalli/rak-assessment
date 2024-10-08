import { AnimatePresence } from "framer-motion";

import { PollOptions, PollSummary } from "../../_components";

import { usePoll } from "../../_contexts";

import { pollQuestions } from "@/app/_utils/poll-questions";
import { LeftPanel } from "../left-panel/left-panel";

type PollProps = {
  savePoll: (data: any) => Promise<any>;
};

export const Poll: React.FC<PollProps> = ({ savePoll }) => {
  const {
    state: { currentStep },
  } = usePoll();

  const isLastStep = currentStep === pollQuestions.length;

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-rak text-white">
      <LeftPanel isLastStep={isLastStep} currentStep={currentStep} />

      <div className="w-full h-full lg:h-auto lg:w-2/3 p-8 flex items-center justify-center bg-white text-rak">
        <AnimatePresence mode="wait">
          {!isLastStep ? <PollOptions /> : <PollSummary save={savePoll} />}
        </AnimatePresence>
      </div>
    </div>
  );
};
