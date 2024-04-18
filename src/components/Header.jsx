"use client";
import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="relative border-b border-gray-300 pb-5 max-lg:pb-3 header">
      <div className="bg-black text-red-700 text-center text-[12px] py-2 flex items-center justify-center gap-4">
        <svg
          width="20"
          height="20"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3333 6.35851V2.39184C13.3333 1.51684 12.96 1.16684 12.0325 1.16684H9.67583C8.74833 1.16684 8.375 1.51684 8.375 2.39184V6.35851C8.375 7.23351 8.74833 7.58351 9.67583 7.58351H12.0325C12.96 7.58351 13.3333 7.23351 13.3333 6.35851Z"
            stroke="#EB4C6B"
          />
          <path
            d="M13.3333 11.6082V10.5582C13.3333 9.68316 12.96 9.33316 12.0325 9.33316H9.67583C8.74833 9.33316 8.375 9.68316 8.375 10.5582V11.6082C8.375 12.4832 8.74833 12.8332 9.67583 12.8332H12.0325C12.96 12.8332 13.3333 12.4832 13.3333 11.6082Z"
            stroke="#EB4C6B"
          />
          <path
            d="M6.62435 7.64199V11.6087C6.62435 12.4837 6.25102 12.8337 5.32352 12.8337H2.96685C2.03935 12.8337 1.66602 12.4837 1.66602 11.6087V7.64199C1.66602 6.76699 2.03935 6.41699 2.96685 6.41699H5.32352C6.25102 6.41699 6.62435 6.76699 6.62435 7.64199Z"
            stroke="#EB4C6B"
          />
          <path
            d="M6.62435 2.39199V3.44199C6.62435 4.31699 6.25102 4.66699 5.32352 4.66699H2.96685C2.03935 4.66699 1.66602 4.31699 1.66602 3.44199V2.39199C1.66602 1.51699 2.03935 1.16699 2.96685 1.16699H5.32352C6.25102 1.16699 6.62435 1.51699 6.62435 2.39199Z"
            stroke="#EB4C6B"
          />
        </svg>
        Lorem, ipsum dolor.
      </div>
      <div className="max-w-7xl mx-auto bg-white w-full grid grid-cols-3 items-center justify-between px-3  py-10 max-lg:py-5">
        <div className="flex items-center gap-4 ">
          <svg
            className="hidden max-lg:flex"
            onClick={() => setIsNavOpen(!isNavOpen)}
            width="26"
            height="26"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 9.5L18 9.5" stroke="#292D32" />
            <path d="M2 16L18 16" stroke="#292D32" />
            <path d="M2 3L18 3" stroke="#292D32" />
          </svg>

          <Image
            src={"/Logo.svg"}
            width={8}
            height={8}
            title="main-logo"
            alt="main-logo"
            className="max-sm:w-6"
          />
        </div>
        <h1 className="font-extrabold text-4xl  text-center max-sm:text-2xl max-sm:font-bold">
          LOGO
        </h1>
        <div className="flex items-center justify-end gap-6 max-md:gap-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 20.9998C16.7467 20.9998 21 16.7465 21 11.4998C21 6.25311 16.7467 1.99982 11.5 1.99982C6.25329 1.99982 2 6.25311 2 11.4998C2 16.7465 6.25329 20.9998 11.5 20.9998Z"
              stroke="#292D32"
            />
            <path d="M22 21.9998L20 19.9998" stroke="#292D32" />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.62 20.8116C12.28 20.9316 11.72 20.9316 11.38 20.8116C8.48 19.8216 2 15.6916 2 8.69156C2 5.60156 4.49 3.10156 7.56 3.10156C9.38 3.10156 10.99 3.98156 12 5.34156C13.01 3.98156 14.63 3.10156 16.44 3.10156C19.51 3.10156 22 5.60156 22 8.69156C22 15.6916 15.52 19.8216 12.62 20.8116Z"
              stroke="#292D32"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.39612 6.5H15.5961C18.9961 6.5 19.3361 8.09 19.5661 10.03L20.4661 17.53C20.7561 19.99 19.9961 22 16.4961 22H7.50612C3.99612 22 3.23612 19.99 3.53612 17.53L4.43613 10.03C4.65613 8.09 4.99612 6.5 8.39612 6.5Z"
              stroke="#292D32"
            />
            <path
              d="M8 8V4.5C8 3 9 2 10.5 2H13.5C15 2 16 3 16 4.5V8"
              stroke="#292D32"
            />
            <path d="M20.41 17.0312H8" stroke="#292D32" />
          </svg>
          <svg
            className="max-lg:hidden"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1625 10.87C12.0625 10.86 11.9425 10.86 11.8325 10.87C9.4525 10.79 7.5625 8.84 7.5625 6.44C7.5625 3.99 9.5425 2 12.0025 2C14.4525 2 16.4425 3.99 16.4425 6.44C16.4325 8.84 14.5425 10.79 12.1625 10.87Z"
              stroke="#292D32"
            />
            <path
              d="M7.15875 14.56C4.73875 16.18 4.73875 18.82 7.15875 20.43C9.90875 22.27 14.4188 22.27 17.1688 20.43C19.5888 18.81 19.5888 16.17 17.1688 14.56C14.4288 12.73 9.91875 12.73 7.15875 14.56Z"
              stroke="#292D32"
            />
          </svg>
          <select
            name="language"
            id="language"
            className="font-bold pl-0 p-2 outline-gray-400 max-lg:hidden"
          >
            <option value="en">ENG</option>
            <option value="in">IN</option>
          </select>
        </div>
      </div>
      <ul className="flex items-center justify-center gap-16 max-lg:hidden">
        <li className="font-semibold text-lg">
          <a href="#">SHOP</a>
        </li>
        <li className="font-semibold text-lg">
          <a href="#">SKILLS</a>
        </li>
        <li className="font-semibold text-lg">
          <a href="#">STORIES</a>
        </li>
        <li className="font-semibold text-lg">
          <a href="#">ABOUT</a>
        </li>
        <li className="font-semibold text-lg">
          <a href="#">CONTACT US</a>
        </li>
      </ul>
      {/* Mobile Nav */}
      {isNavOpen && (
        <div className="w-full hidden max-lg:block transition-all duration-1000">
          <ul className="bg-gray-300 flex flex-col gap-2 mx-4 rounded-lg p-2">
            <li className="font-semibold text-lg">
              <a href="#">SHOP</a>
            </li>
            <li className="font-semibold text-lg">
              <a href="#">SKILLS</a>
            </li>
            <li className="font-semibold text-lg">
              <a href="#">STORIES</a>
            </li>
            <li className="font-semibold text-lg">
              <a href="#">ABOUT</a>
            </li>
            <li className="font-semibold text-lg">
              <a href="#">CONTACT US</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
