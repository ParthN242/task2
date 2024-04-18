"use client";
import React, { useState } from "react";

const FilterItems = ({ heading, label, filters }) => {
  const [isOpen, setIsOpne] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4 ">
      {/* Top */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setIsOpne(!isOpen)}
      >
        <div>
          <h4 className="font-bold text-lg">{heading}</h4>
          <p className="text-lg">{label}</p>
        </div>
        <div>
          {isOpen ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.72003 10.73L7.0667 6.38489C7.58003 5.87174 8.42003 5.87174 8.93336 6.38489L13.28 10.73"
                stroke="#292D32"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.72125 6.00017L7.06792 10.3468C7.58125 10.8602 8.42125 10.8602 8.93458 10.3468L13.2813 6.00018"
                stroke="#292D32"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
      {/* Bottom */}
      <div className={`${isOpen ? "flex flex-col" : " hidden"} gap-5 mt-6`}>
        <button className="underline text-gray-400 text-left">
          Unselect all
        </button>
        {filters.map((item, index) => (
          <div className="flex gap-2 items-center text-lg" key={index}>
            <input
              type="checkbox"
              name={item.name}
              className="w-[20px] h-[20px]  "
            />
            <label>{item.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterItems;
