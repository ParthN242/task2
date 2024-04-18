import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="pl-[100px] pt-[80px] pr-[64px] max-lg:pl-[60px] max-md:px-5">
        {/* Top */}
        <div className="flex max-lg:flex-col gap-4">
          {/* Top Left */}
          <div className="w-[60%] max-lg:w-full">
            <h4 className="uppercase font-bold text-xl mb-6">
              Be the first to know
            </h4>
            <p className="max-md:hidden">
              Sign up for updates from mettā muse.
            </p>
            <p className="hidden max-md:block max-md:text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. this is simply dummy text.
            </p>
            <div className="mt-[50px] max-md:mt-[20px] flex flex-wrap gap-[18px] max-md:gap-2">
              <input
                type="email"
                name="email"
                className="py-[14px] px-6 outline-none w-[384px] max-md:max-w-[180px] rounded max-md:py-3 max-md:px-1 max-md:text-sm"
                placeholder="Enter your e-mail..."
              />
              <button className="uppercase w-[184px] max-md:max-w-[100px] max-md:p-1  h-[48px] rounded-[5px] border border-gray-600 max-md:text-sm">
                Subscribe
              </button>
            </div>
            <div className="w-full border border-white my-4 hidden max-md:block"></div>
          </div>
          {/* Top Right */}
          <div>
            <div>
              <h4 className="uppercase font-bold text-xl">Contact Us</h4>
              <div className="mt-4 mb-6 flex flex-col max-md:flex-row gap-4 max-md:gap-2 max-md:text-xs">
                <p>+44 221 133 5360</p>
                <p>customercare@mettamuse.com</p>
              </div>
              <div className="w-full border border-white my-4 hidden max-md:block"></div>
              <h1 className="uppercase font-bold text-xl">Currency</h1>
              <div className="flex gap-2 items-center my-4">
                <Image
                  src={"/US.png"}
                  width={24}
                  height={24}
                  alt="US"
                  title="US"
                  loading="lazy"
                />
                <svg
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 0L4.48492 1.51508L6 3L4.48492 4.48492L3 6L1.51508 4.48492L0 3L1.51508 1.51508L3 0Z"
                    fill="white"
                  />
                </svg>
                <h6 className="text-[16px] font-bold">USD</h6>
              </div>
              <p className="text-xs max-md:hidden">
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>
        {/* Line */}
        <div className="w-full border border-white mt-[26px] mb-[56px] max-md:mb-4"></div>
        {/* Bottom */}
        <div className="flex max-lg:flex-col max-md:gap-6">
          {/* Bottom left */}
          <div className="w-[60%] max-lg:w-full flex max-md:flex-col gap-[180px] max-lg:gap-[105px] max-md:gap-4">
            <div className="">
              <h4 className="font-bold text-xl mb-[18px]">mettā muse</h4>
              <ul className="flex flex-col gap-4 text-lg max-lg:text-[16px] whitespace-nowrap max-md:hidden">
                <li>About Us</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>EU Compliances Docs</li>
              </ul>
            </div>
            <div className="w-full border border-white hidden max-md:block"></div>
            <div className="">
              <h4 className="font-bold text-xl mb-[18px] uppercase">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-4 text-lg max-lg:text-[16px] whitespace-nowrap max-md:hidden">
                <li>Orders & Shipping</li>
                <li>Join/Login as a Seller</li>
                <li>Payment & Pricing</li>
                <li>Return & Refunds </li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div className="w-full border border-white hidden max-md:block"></div>
          </div>
          {/* Bottom Rigth */}
          <div>
            <h4 className="uppercase font-bold text-xl">Follow Us</h4>
            <div className="flex gap-3 mt-6 max-md:hidden">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="32"
                  height="32"
                  rx="16"
                  fill="black"
                  stroke="white"
                  strokeWidth="1.2"
                />
                <g clipPath="url(#clip0_14655_242)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.7017 9.048C12.8503 9.08686 12.2686 9.22171 11.7589 9.42057C11.2331 9.624 10.7874 9.89829 10.3417 10.3429C9.89829 10.7874 9.624 11.2343 9.42057 11.76C9.22171 12.2686 9.08686 12.8503 9.048 13.7017C9.00914 14.5543 9 14.8274 9 17C9 19.1726 9.00914 19.4457 9.048 20.2983C9.08686 21.1497 9.22171 21.7314 9.42057 22.2411C9.624 22.7669 9.89829 23.2126 10.3429 23.6583C10.7874 24.1017 11.2343 24.376 11.76 24.5806C12.2686 24.7783 12.8503 24.912 13.7017 24.952C14.5554 24.9909 14.8274 25 17 25C19.1726 25 19.4457 24.9909 20.2983 24.952C21.1497 24.9131 21.7314 24.7783 22.2411 24.5806C22.7669 24.3749 23.2126 24.1017 23.6583 23.6571C24.1017 23.2126 24.376 22.7657 24.5806 22.24C24.7783 21.7314 24.912 21.1497 24.952 20.2983C24.9909 19.4446 25 19.1726 25 17C25 14.8274 24.9909 14.5543 24.952 13.7017C24.9131 12.8503 24.7783 12.2686 24.5806 11.7589C24.3795 11.2249 24.0644 10.7413 23.6571 10.3417C23.2126 9.89829 22.7657 9.624 22.24 9.42057C21.7314 9.22171 21.1497 9.08686 20.2983 9.048C19.4457 9.00914 19.1726 9 17 9C14.8274 9 14.5543 9.00914 13.7017 9.048ZM12.8914 17C12.8914 18.0897 13.3243 19.1347 14.0948 19.9052C14.8653 20.6757 15.9103 21.1086 17 21.1086C18.0897 21.1086 19.1347 20.6757 19.9052 19.9052C20.6757 19.1347 21.1086 18.0897 21.1086 17C21.1086 15.9103 20.6757 14.8653 19.9052 14.0948C19.1347 13.3243 18.0897 12.8914 17 12.8914C15.9103 12.8914 14.8653 13.3243 14.0948 14.0948C13.3243 14.8653 12.8914 15.9103 12.8914 17ZM17 19.6663C16.2929 19.6663 15.6147 19.3854 15.1147 18.8853C14.6146 18.3853 14.3337 17.7071 14.3337 17C14.3337 16.2929 14.6146 15.6147 15.1147 15.1147C15.6147 14.6146 16.2929 14.3337 17 14.3337C17.7071 14.3337 18.3853 14.6146 18.8853 15.1147C19.3854 15.6147 19.6663 16.2929 19.6663 17C19.6663 17.7071 19.3854 18.3853 18.8853 18.8853C18.3853 19.3854 17.7071 19.6663 17 19.6663ZM22.6 12.44C22.6 12.5661 22.5752 12.6909 22.5269 12.8074C22.4787 12.9238 22.408 13.0297 22.3188 13.1188C22.2297 13.208 22.1238 13.2787 22.0074 13.3269C21.8909 13.3752 21.7661 13.4 21.64 13.4C21.5139 13.4 21.3891 13.3752 21.2726 13.3269C21.1562 13.2787 21.0503 13.208 20.9612 13.1188C20.872 13.0297 20.8013 12.9238 20.7531 12.8074C20.7048 12.6909 20.68 12.5661 20.68 12.44C20.68 12.1854 20.7811 11.9412 20.9612 11.7612C21.1412 11.5811 21.3854 11.48 21.64 11.48C21.8946 11.48 22.1388 11.5811 22.3188 11.7612C22.4989 11.9412 22.6 12.1854 22.6 12.44Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_14655_242">
                    <rect
                      width="32"
                      height="32"
                      fill="white"
                      transform="translate(1 1)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.999756"
                  y="1"
                  width="32"
                  height="32"
                  rx="16"
                  stroke="white"
                  strokeWidth="1.2"
                />
                <path
                  d="M24 8C24.5304 8 25.0391 8.21071 25.4142 8.58579C25.7893 8.96086 26 9.46957 26 10V24C26 24.5304 25.7893 25.0391 25.4142 25.4142C25.0391 25.7893 24.5304 26 24 26H10C9.46957 26 8.96086 25.7893 8.58579 25.4142C8.21071 25.0391 8 24.5304 8 24V10C8 9.46957 8.21071 8.96086 8.58579 8.58579C8.96086 8.21071 9.46957 8 10 8H24ZM23.5 23.5V18.2C23.5 17.3354 23.1565 16.5062 22.5452 15.8948C21.9338 15.2835 21.1046 14.94 20.24 14.94C19.39 14.94 18.4 15.46 17.92 16.24V15.13H15.13V23.5H17.92V18.57C17.92 17.8 18.54 17.17 19.31 17.17C19.6813 17.17 20.0374 17.3175 20.2999 17.5801C20.5625 17.8426 20.71 18.1987 20.71 18.57V23.5H23.5ZM11.88 13.56C12.3256 13.56 12.7529 13.383 13.0679 13.0679C13.383 12.7529 13.56 12.3256 13.56 11.88C13.56 10.95 12.81 10.19 11.88 10.19C11.4318 10.19 11.0019 10.3681 10.685 10.685C10.3681 11.0019 10.19 11.4318 10.19 11.88C10.19 12.81 10.95 13.56 11.88 13.56ZM13.27 23.5V15.13H10.5V23.5H13.27Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="w-full border border-white my-4"></div>
            <h4 className="font-bold text-xl mt-14 max-md:mt-8 mb-4">
              mettā muse Accepts
            </h4>
            <div className="flex flex-wrap gap-2 items-center">
              <Image
                src={"/g-pay.png"}
                width={56}
                height={35}
                alt="g-pay"
                title="g-pay"
                loading="lazy"
              />
              <Image
                src={"/mastercard.png"}
                width={56}
                height={35}
                alt="mastercard"
                title="mastercard"
                loading="lazy"
              />
              <Image
                src={"/paypal.png"}
                width={56}
                height={35}
                alt="paypal"
                title="paypal"
                loading="lazy"
              />
              <Image
                src={"/amex.png"}
                width={56}
                height={35}
                alt="amex"
                title="amex"
                loading="lazy"
              />
              <Image
                src={"/ipay.png"}
                width={56}
                height={35}
                alt="ipay"
                title="ipay"
                loading="lazy"
              />
              <Image
                src={"/opay.png"}
                width={56}
                height={35}
                alt="opay"
                title="opay"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="py-7">
        <p className="text-center text-sm">
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
