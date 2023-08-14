import { SubmitFeedback } from "./submit-feedback";

describe("Submit feedback", () => {
  it("should submit a feedback", async () => {
    const submitFeedback = new SubmitFeedback(
      { create: async () => {} },
      { sendMail: async () => {} }
    );

   await expect(
      submitFeedback.execute({
        type: "Problema",
        comment: "Comentario exemplo",
        screenshot: "data:image/png;base64:1239183809128312ueioawjdoinwdoam",
      })
    ).resolves.not.toThrow();
  });
});
