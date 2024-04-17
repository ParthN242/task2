import Image from "next/image";
import React from "react";

const ProductItem = ({ item }) => {
  return (
    <div className="relative w-[280px] max-lg:w-[220px] max-md:w-[180px] max-sm:w-[140px]">
      <Image
        src={item.image}
        width={280}
        height={400}
        alt={item.title}
        title={item.title}
        className="object-contain max-w-auto h-[400px] max-lg:h-[300px] max-md:h-[200px] mx-auto"
      />
      <div>
        <h3 className="text-lg font-bold line-clamp-1 mt-4 max-md:text-[16px]">
          {item.title}
        </h3>
        <p className="text-[16px] font-medium mt-2 max-md:text-sm">
          ₹{item.price}
        </p>
      </div>
      <svg
        width="24"
        height="24"
        className="absolute bottom-0 right-0"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.62 20.8097C12.28 20.9297 11.72 20.9297 11.38 20.8097C8.48 19.8197 2 15.6897 2 8.68973C2 5.59973 4.49 3.09973 7.56 3.09973C9.38 3.09973 10.99 3.97973 12 5.33973C13.01 3.97973 14.63 3.09973 16.44 3.09973C19.51 3.09973 22 5.59973 22 8.68973C22 15.6897 15.52 19.8197 12.62 20.8097Z"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ProductItem;
