"use client";
import { ShoeMoreProps } from "@/types";
import React from "react";
import Button from "./Button";
import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";

const ShowMore = ({ pageNumber, isNext }: ShoeMoreProps) => {
  const router = useRouter();
  const handleUpdate = () => {
    const newpage = (pageNumber + 1) * 10;
    const newparam = updateSearchParams("limit", `${newpage}`);
    router.push(newparam);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <Button
          title="Show More"
          handelBtn={handleUpdate}
          classbtn="bg-primary-blue rounded-full text-white"
          btnType="button"
        />
      )}
    </div>
  );
};

export default ShowMore;
