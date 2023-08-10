import CloseButton from "../CloseButton";
import { Bug, Lightbulb, Sparkle } from "phosphor-react";
import FeedbackType from "./FeedbackType";
import { useState } from "react";

const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<string | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg  w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        <FeedbackType
          title="Problema"
          image={<Bug weight="bold" size={30} />}
          setFeedbackType={setFeedbackType}
        />
        <FeedbackType
          title="Ideia"
          image={<Lightbulb weight="bold" size={30} />}
          setFeedbackType={setFeedbackType}
        />
        <FeedbackType
          title="Outro"
          image={<Sparkle weight="bold" size={30} />}
          setFeedbackType={setFeedbackType}
        />
      </div>

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
