import { Bug, Lightbulb, Sparkle } from "phosphor-react";
import CloseButton from "../../CloseButton";
import FeedbackTypeButton from "./FeedbackTypeButton";

interface FeedbackTypeProps {
  setFeedbackType: React.Dispatch<React.SetStateAction<string | null>>;
}

const FeedbackType = ({ setFeedbackType }: FeedbackTypeProps) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        <FeedbackTypeButton
          title="Problema"
          image={<Bug weight="bold" size={30} />}
          setFeedbackType={setFeedbackType}
        />
        <FeedbackTypeButton
          title="Ideia"
          image={<Lightbulb weight="bold" size={30} />}
          setFeedbackType={setFeedbackType}
        />
        <FeedbackTypeButton
          title="Outro"
          image={<Sparkle weight="bold" size={30} />}
          setFeedbackType={setFeedbackType}
        />
      </div>
    </>
  );
};

export default FeedbackType;
