import { pollQuestions } from "./poll-questions";

describe("Poll Questions", () => {
  it("should have the correct number of questions", () => {
    expect(pollQuestions.length).toBe(3);
  });

  it("should have correct structure for each question", () => {
    pollQuestions.forEach((question, index) => {
      expect(question).toHaveProperty("id");
      expect(typeof question.id).toBe("number");

      expect(question).toHaveProperty("title");
      expect(typeof question.title).toBe("string");

      expect(question).toHaveProperty("options");
      expect(Array.isArray(question.options)).toBe(true);
    });
  });

  it("should have correct structure for each option", () => {
    pollQuestions.forEach((question) => {
      question.options.forEach((option) => {
        expect(option).toHaveProperty("emoji");
        expect(typeof option.emoji).toBe("string");

        expect(option).toHaveProperty("label");
        expect(typeof option.label).toBe("string");
      });
    });
  });

  it("should have specific titles for each question", () => {
    const expectedTitles = [
      "How was your day?",
      "Rate your productivity",
      "Your stress level",
    ];

    pollQuestions.forEach((question, index) => {
      expect(question.title).toBe(expectedTitles[index]);
    });
  });

  it("should have 3 options for each question", () => {
    pollQuestions.forEach((question) => {
      expect(question.options.length).toBe(3);
    });
  });
});
