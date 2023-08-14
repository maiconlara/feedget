import CloseButton from "../../CloseButton";
import FeedbackTypeButton from "./FeedbackTypeButton";
import bug from "../../../assets/bug.png";
import idea from "../../../assets/idea.png";
import thought from "../../../assets/thought.png";

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
          image={bug}
          setFeedbackType={setFeedbackType}
        />
        <FeedbackTypeButton
          title="Ideia"
          image={idea}
          setFeedbackType={setFeedbackType}
        />
        <FeedbackTypeButton
          title="Outro"
          image={thought}
          setFeedbackType={setFeedbackType}
        />
      </div>
    </>
  );
};

export default FeedbackType;
