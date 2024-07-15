"use client";
import { CustomBtn } from "@/types";
import Image from "next/image";
import React from "react";

const Button = ({
  isDisable,
  title,
  handelBtn,
  classbtn,
  btnType,
  textStyles,
  rightIcon,
}: CustomBtn) => {
  return (
    <button
      disabled={isDisable}
      type={btnType || "button"}
      className={`custom-btn ${classbtn}`}
      onClick={handelBtn}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcon}
          alt="arrow_left"
          fill
          className="object-contain"
        />
      </div>
        )}
    </button>
  );
};

export default Button;
