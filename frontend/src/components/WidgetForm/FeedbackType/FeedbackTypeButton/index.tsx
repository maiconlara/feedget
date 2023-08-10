interface FeedbackTypeButtonProps {
  title: string;
  image: JSX.Element;
  setFeedbackType: React.Dispatch<React.SetStateAction<string | null>>;
}

const FeedbackTypeButton = ({ title, image, setFeedbackType }: FeedbackTypeButtonProps) => {
  return (
    <button
      className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
      type="button"
      onClick={() => setFeedbackType(title)}
    >
      <div className="items-center flex flex-col text-brand-500">{image}</div>
      <div className="items-center flex flex-col mt-2">{title}</div>
    </button>
  );
};

export default FeedbackTypeButton;
