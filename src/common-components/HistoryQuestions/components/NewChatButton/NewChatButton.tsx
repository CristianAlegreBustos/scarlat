import cn from "classnames";
import css from "./NewChatButton.module.scss";
import { IconPlus } from "../../../assets/IconPlus";

interface NewChatButtonProps {
  onClick:()=>void;
  hide?: string;
  className?:string
}

export const NewChatButton = ({ onClick,hide,className}:NewChatButtonProps) => {
  return (
    <a
      onClick={onClick}
      className={cn(
        "flex py-3 px-3 items-center gap-3 text-white cursor-pointer text-sm rounded-md border text-xl mb-1 flex-shrink-0",
        className ? className:css.wrapper
      )}
    >
      <IconPlus />
      <span className={cn("inline-block",hide)}>Nuevo Chat</span>
    </a>
  );
};
