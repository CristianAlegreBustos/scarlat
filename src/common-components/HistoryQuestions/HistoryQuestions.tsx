import cn from "classnames";
import css from "./HistoryQuestions.module.scss";
import { IconChat } from "./assets/IconChat";



const HistoryQuestions = ({ conversations, onConversationClick,setActiveConversationIndex }: HistoryProps) => {
 

  return (
    
      <ul className={css.questions}>
        {conversations.map((conversation, index) => (
          <li className={cn("relative",css.title )} key={index} onClick={() => setActiveConversationIndex (index)}>
            <a className="flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all )} )} hover:pr-4 bg-gray-900 group">
           <IconChat/>
            <div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
            {conversation.title.content}
            </div>
            <div className="absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l from-gray-900 group-hover:from-[#2A2B32]"></div>
            </a>
          </li>
        ))}
      </ul>
 
  );
};

export default HistoryQuestions;

