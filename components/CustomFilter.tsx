'use client'
import { customFilterProps } from "@/types";
import { updateSearchParams } from "@/utils";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";

const CustomFilter = ({ title, options }: customFilterProps) => {
  const router=useRouter()
  const [selectedoption, setSelectedoption] = useState(options[0]);
  const handelUpdate=(e:{title:string,value:string})=>{
const newparam=updateSearchParams(title,e.value.toLowerCase())
router.push(newparam)
  }
  return (
    <div className="w-fit">
      <Listbox value={selectedoption} onChange={(e) => {
        setSelectedoption(e)
        handelUpdate(e)
        }}>
        <div className="relative w-fit ">
          <ListboxButton className="custom-filter__btn">
            <span className="block truncate">{selectedoption.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="chevron_up-down"
            />
          </ListboxButton>

          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <Transition></>
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className="custom-filter__options">
              {options.map((item) => (
                <ListboxOption
                  key={item.title}
                  value={item}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                   <>
                   
                   <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {item.title}
                    </span>
                   </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
