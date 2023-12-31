import { ArrowLeft } from "phosphor-react";
import CloseButton from "../../CloseButton";
import ScreenshotButton from "./ScreenshotButton";
import { FormEvent, useState } from "react";
import { api } from "../../../lib/api";
import LoadingButton from "./ScreenshotButton/LoadingButton";

interface FeedbackContentProps {
  feedbackType: string;
  handleRestartFeedback: () => void;
  onFeedbackSent: () => void;
}

const FeedbackContent = ({
  feedbackType,
  handleRestartFeedback,
  onFeedbackSent,
}: FeedbackContentProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState<string>("");
  const [loadingSendFeedback, setLoadingSendFeedback] = useState(false);

  const submitFeedback = async (event: FormEvent) => {
    event.preventDefault();
    setLoadingSendFeedback(true);
    await api.post("/feedbacks", {
      type: feedbackType,
      comment,
      screenshot,
    });
    setLoadingSendFeedback(false);
    onFeedbackSent();
  };

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={handleRestartFeedback}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6">{feedbackType}</span>
        <CloseButton />
      </header>

      <form onSubmit={submitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] placeholder-zinc-400 text-zinc-100 text-md border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Como podemos ajudar..."
          onChange={(event) => setComment(event.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTake={setScreenshot}
          />
          <button
            type="submit"
            disabled={comment.length == 0 || loadingSendFeedback}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
           {loadingSendFeedback ? <LoadingButton /> : 'Enviar feedback'} 
          </button>
        </footer>
      </form>
    </>
  );
};

export default FeedbackContent;
