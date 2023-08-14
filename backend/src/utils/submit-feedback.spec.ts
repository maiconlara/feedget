import { SubmitFeedback } from "./submit-feedback";


const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedback(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe("Submit feedback", () => {
  it("should submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "Problema",
        comment: "Comentario exemplo",
        screenshot: "data:image/png;base64:1239183809128312ueioawjdoinwdoam",
      })
    ).resolves.not.toThrow();
    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });


});

it("should not submit a feedback without a type", async () => {
  await expect(
    submitFeedback.execute({
      type: "",
      comment: "Comentario exemplo",
      screenshot: "data:image/png;base64:1239183809128312ueioawjdoinwdoam",
    })
  ).rejects.toThrow();
});

it("should not submit a feedback without a comment", async () => {
  await expect(
    submitFeedback.execute({
      type: "Problema",
      comment: "",
      screenshot: "data:image/png;base64:1239183809128312ueioawjdoinwdoam",
    })
  ).rejects.toThrow();
});

it("should not submit a feedback without a screenshot", async () => {
  await expect(
    submitFeedback.execute({
      type: "Problema",
      comment: "Hey listen!",
      screenshot: "aaa",
    })
  ).rejects.toThrow();
});