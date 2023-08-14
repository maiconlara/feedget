import { SubmitFeedback } from "./submit-feedback";

describe("Submit feedback", () => {
  it("should submit a feedback", () => {
    const submitFeedback = new SubmitFeedback(
      { create: async () => {} },
      { sendMail: async () => {} }
    );

    expect(
      submitFeedback.execute({
        type: "Problema",
        comment: "Comentario exemplo",
        screenshot: "1213123",
      })
    ).resolves.not.toThrow();
  });
});
