import React from "react";
import css from "./IconButtons.module.scss"
import cn from "classnames"
const IconButton: React.FC<IconButtonProps> = ({ icon, onClick, className }) => {
  return (
    <div className={cn(className,css.button)} onClick={onClick}>
      {icon}
    </div>
  );
};

export default IconButton;