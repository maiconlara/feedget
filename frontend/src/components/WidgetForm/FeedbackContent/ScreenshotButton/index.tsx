import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import LoadingButton from "./LoadingButton";

interface ScreenshotButtonProps {
  onScreenshotTake: (screenshot: string | null) => void;
  screenshot: string | null;
}

const ScreenshotButton = ({
  onScreenshotTake,
  screenshot,
}: ScreenshotButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const takeScreenshot = async () => {
    setIsLoading(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");
    onScreenshotTake(base64image);
    setIsLoading(false);
  };

  if (screenshot) {
    return (
      <button
        onClick={() => onScreenshotTake(null)}
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors "
        style={{ backgroundImage: `url(${screenshot})` }}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      type="button"
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      onClick={takeScreenshot}
    >
      {isLoading ? <LoadingButton /> : <Camera className="w-6 h-6" />}
    </button>
  );
};

export default ScreenshotButton;
