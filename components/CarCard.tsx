"use client";
import { CarCardProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import { Button, CarDetails } from "@/components";
interface CarProp {
  car: CarCardProps;
}

const CarCard = ({ car }: CarProp) => {
  const rent = calculateCarRent(car.city_mpg, car.year);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {car.make} {car.model}
        </h2>
      </div>
      <p className="flex  mt-6 font-extrabold text-[32px] ">
        <span className="self-start text-[14px] font-semibold">$</span>
        {rent}
        <span className="self-end text-[14px] font-semibold">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          fill
          alt="car model"
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px] leading-[17px]">
              {car.transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="car-card__icon">
            <Image src="/tire.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{car.drive.toUpperCase()}</p>
          </div>
          <div className="car-card__icon">
            <Image src="/gas.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{car.city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <Button
            title="View More"
            handelBtn={() => setIsOpen(true)}
            classbtn="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
          />
        </div>
        <CarDetails isOpen={isOpen} closeModal={()=>setIsOpen(false)} car={car} />
      </div>
    </div>
  );
};

export default CarCard;
