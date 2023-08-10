import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

const CloseButton = () => {
  return (
    <Popover.Button className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100 title='Fechar'">
      <X weight="bold" className="w-4 h-4" />
    </Popover.Button>
  );
};

export default CloseButton;
