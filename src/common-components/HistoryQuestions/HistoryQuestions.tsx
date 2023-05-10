import { memo } from "react";
import cn from "classnames";
import css from "./HistoryQuestions.module.scss";
import { IconDelete } from "../assets/IconDelete";
import IconButton from "../Buttons/IconButtons/IconButtons";

const HistoryQuestions = ({
  conversations,
  setActiveConversationIndex,
  onDeleteConversation,
  onEditConversationTitle,
}: HistoryProps) => {
  return (
    <ul className={css.questions}>
      {conversations.map((conversation, index) => (
        <li className={cn("relative cursor-pointer", css.title)} key={index}>
          <input
            className="w-full bg-transparent text-white outline-none text-xl"
            defaultValue={conversation.title}
            onClick={() => setActiveConversationIndex(index)}
          />
          <IconButton
            icon={<IconDelete />}
            className="mt-2 mr-2 text-red-500"
            onClick={() => onDeleteConversation(index)}
          />
        </li>
      ))}
    </ul>
  );
};
export default memo(HistoryQuestions);
