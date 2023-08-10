import { ArrowLeft } from "phosphor-react";
import CloseButton from "../../CloseButton";

interface FeedbackContentProps {
  feedbackType: string;
  handleRestartFeedback: () => void;
}

const FeedbackContent = ({
  feedbackType,
  handleRestartFeedback,
}: FeedbackContentProps) => {
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

      <div className="flex py-8 gap-2 w-full"></div>
    </>
  );
};

export default FeedbackContent;
