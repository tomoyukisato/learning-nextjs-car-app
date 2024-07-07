import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";
const Button = ({
    isDisabled,
    btnType,
    containerStyles,
    textStyles,
    title,
    rightIcon,
    handleClick,
}: CustomButtonProps) => (
    <button
        disabled={isDisabled}
        type={btnType}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}> {title}</span>
        {rightIcon && (
            <div className="relative w-6 h-6">
                <Image src={rightIcon} alt="" fill className="" />
            </div>
        )}
    </button>
);

export default Button;
