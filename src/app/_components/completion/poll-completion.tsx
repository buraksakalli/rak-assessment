"use client";

import { usePoll } from "../../_contexts";

export const PollCompletion = () => {
  const { dispatch } = usePoll();

  const handleRestart = () => {
    dispatch({ type: "RESTART" });
  };

  return (
    <div>
      <h2 className="text-6xl mb-8 font-bold">You have completed the poll!</h2>
      <button
        className="bg-white text-rak py-2 px-4 rounded-md hover:bg-rak hover:text-white transition-colors border hover:border-white"
        onClick={handleRestart}
      >
        Restart
      </button>
    </div>
  );
};
