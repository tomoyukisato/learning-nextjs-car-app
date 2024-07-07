"use client";

import { manufacturers } from "@/constants";
import { SearchManufacturerProps } from "@/types";
import {
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
    Transition,
} from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";

const SearchManufacturer = ({
    manufacturer,
    setManufacturer,
}: SearchManufacturerProps) => {
    const [query, setQuery] = useState("");
    const filteredManufacturers =
        query === ""
            ? manufacturers
            : manufacturers.filter((item) => {
                  return item
                      .toLowerCase()
                      .replace(/\s+/g, "")
                      .includes(query.toLowerCase().replace(/\s+/g, ""));
              });
    return (
        <div className="search-manufacturer">
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className="relative w-full">
                    <ComboboxButton className="absolute top-[14px]">
                        <Image
                            src="/car-logo.svg"
                            width={20}
                            height={20}
                            alt="car logo"
                        />
                    </ComboboxButton>
                    <ComboboxInput
                        className="search-manufacturer__input"
                        displayValue={(item: string) => item}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Volkswagen.."
                    ></ComboboxInput>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery("")}
                    >
                        <ComboboxOptions
                            static
                            className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        >
                            {filteredManufacturers.map((item) => (
                                <ComboboxOption
                                    key={item}
                                    className={({ focus }) =>
                                        `reactive search-manufacturer__option ${
                                            focus
                                                ? "bg-secondary-orange text-white"
                                                : "text-gray-900"
                                        }`
                                    }
                                    value={item}
                                >
                                    {({ selected, focus }) => {
                                        console.log("selected");
                                        console.log(selected);
                                        return (
                                            <>
                                                <span
                                                    className={`block truncate ${
                                                        selected
                                                            ? "font-medium"
                                                            : "font-normal"
                                                    }`}
                                                >
                                                    {item}
                                                    {selected}
                                                </span>
                                                /** TODO: selected
                                                がTRUEになるのはいつ？調べる */
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                            focus
                                                                ? "text-white"
                                                                : "text-primary-blue bg-primary-purple"
                                                        }`}
                                                    ></span>
                                                ) : null}
                                            </>
                                        );
                                    }}
                                </ComboboxOption>
                            ))}
                        </ComboboxOptions>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
};

export default SearchManufacturer;
