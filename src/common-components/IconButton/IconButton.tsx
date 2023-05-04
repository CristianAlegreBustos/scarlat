import React from "react";
import css from "./IconButton.module.scss"
import cn from "classnames"
const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, className }) => {
  return (
    <button className={cn(className,css.button)} onClick={onClick}>
      {icon}
    </button>
  );
};

export default IconButton;