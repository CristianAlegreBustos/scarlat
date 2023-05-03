import cn from "classnames"
import css from "./NewChatButton.module.scss"
import { IconPlus } from "../../assets/IconPlus";

export const NewChatButton = ({ onClick }: { onClick: () => void }) => {
  return (
      <a onClick={onClick} className={cn("flex py-3 px-3 items-center gap-3 text-white cursor-pointer text-sm rounded-md border text-xl mb-1 flex-shrink-0",css.wrapper)}>
       <IconPlus/>
        Nuevo Chat
      </a>
  );
};
