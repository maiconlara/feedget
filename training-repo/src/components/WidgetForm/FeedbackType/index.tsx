import { useState } from "react";


interface FeedbackTypeProps {
  title: string;
  image: JSX.Element;
}

const FeedbackType = ({ title, image }: FeedbackTypeProps) => {
  const [feedbackType, setFeedbackType] = useState<string | null>(null);

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

export default FeedbackType;
