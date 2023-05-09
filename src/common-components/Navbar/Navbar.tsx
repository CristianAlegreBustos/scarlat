import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { NewChatButton } from "@/common-components/HistoryQuestions/components/NewChatButton/NewChatButton";
import cn from "classnames";
import css from "src/common-components/Navbar/Navbar.module.scss"

const Navbar: React.FC<NavbarProps> = ({
    onClickNewChat,
    activeConversationTitle,
    onHamburgerClick,
  }) => {
    const [hamburguer,setHamburguer]=useState(true)
    const onClick = ()=>{
        setHamburguer(false)
        onHamburgerClick()
    }
    return (
      <div className="lg:hidden w-full top-0 left-0 z-2 p-4 flex justify-between items-center border-b bg-slate-900">
    <HiMenu className={cn("text-2xl")} onClick={onClick} />
        <div className="text-lg font-semibold">
          {/* {activeConversationTitle || "New Chat"} */}
          New Chat
        </div>
        <NewChatButton className={css.small} hide="hidden lg:visible " onClick={onClickNewChat} />
      </div>
    );
  };
  
  export default Navbar;

