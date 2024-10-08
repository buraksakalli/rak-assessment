export interface PollQuestion {
  id: number;
  title: string;
  options: { emoji: string; label: string }[];
}

export const pollQuestions: PollQuestion[] = [
  {
    id: 1,
    title: "How was your day?",
    options: [
      { emoji: "👍", label: "Good" },
      { emoji: "😐", label: "Neutral" },
      { emoji: "👎", label: "Bad" },
    ],
  },
  {
    id: 2,
    title: "Rate your productivity",
    options: [
      { emoji: "🚀", label: "High" },
      { emoji: "🌟", label: "Medium" },
      { emoji: "🐌", label: "Low" },
    ],
  },
  {
    id: 3,
    title: "Your stress level",
    options: [
      { emoji: "😌", label: "Relaxed" },
      { emoji: "😊", label: "Manageable" },
      { emoji: "😰", label: "Stressed" },
    ],
  },
];
