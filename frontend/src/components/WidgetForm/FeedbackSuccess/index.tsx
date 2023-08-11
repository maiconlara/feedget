import CloseButton from "../../CloseButton";
import sucess from "../../../assets/success.svg";

interface FeedbackSucessProps {
  onRestartFeedback: () => void;
}

const FeedbackSuccess = ({ onRestartFeedback }: FeedbackSucessProps) => {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={sucess} alt="sucesso" className="w-12 h-auto" />
        <span className="text-xl mt-2 ">Agradeçemos seu Feedback!</span>

        <button
          onClick={onRestartFeedback}
          type="button"
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        >
          Realizar outro
        </button>
      </div>
    </>
  );
};
export default FeedbackSuccess;
