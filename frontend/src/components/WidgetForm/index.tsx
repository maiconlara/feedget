import FeedbackType from "./FeedbackType";
import FeedbackContent from "./FeedbackContent";
import { useState } from "react";
import FeedbackSuccess from "./FeedbackSuccess";

const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<string | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleRestartFeedback = () => {
    setFeedbackType(null);
  };

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg  w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccess />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackType setFeedbackType={setFeedbackType} />
          ) : (
            <FeedbackContent
              feedbackType={feedbackType}
              handleRestartFeedback={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ por {""}
        <a
          className="text-[#5ED3F3] hover:text-brand-500"
          href="https://github.com/maiconlara"
        >
          Maicon Lara
        </a>
      </footer>
    </div>
  );
};

export default WidgetForm;
