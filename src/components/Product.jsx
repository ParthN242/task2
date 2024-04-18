"use client";
import React, { useEffect, useState } from "react";
import ProductFilter from "./ProductFilter";
import ProductItem from "./ProductItem";
import axios from "axios";

const Product = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data.products);
    };
    fetchProducts();
  }, []);
  return (
    <section className="max-w-7xl mx-auto mb-20 px-4">
      <div className="border-t border-b border-gray-400 py-6 max-md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-10 max-md:hidden">
          <p className="font-bold">{products.length} Items</p>
          <button
            className="flex items-center text-gray-500 gap-2"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            {isFilterOpen ? (
              <>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99986 2.72125L5.65319 7.06792C5.13986 7.58125 5.13986 8.42125 5.65319 8.93458L9.99986 13.2812"
                    stroke="#292D32"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="underline">HIDE FILTER</span>
              </>
            ) : (
              <>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.00027 2.72125L10.3469 7.06792C10.8603 7.58125 10.8603 8.42125 10.3469 8.93458L6.00027 13.2812"
                    stroke="#292D32"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="underline">SHOW FILTER</span>
              </>
            )}
          </button>
        </div>
        <div
          className="hidden max-md:block max-md:text-sm w-[50%] border-r border-gray-400"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <h4 className="font-bold text-center">FILTER</h4>
        </div>
        <div className="max-md:text-sm">
          <label>
            <select
              name="filter"
              className="font-semibold uppercase outline-none"
            >
              <option value="" className="p-3">
                RECOMMEDED
              </option>
              <option value="">Newest first</option>
              <option value="">popular</option>
              <option value="">Price : high to low</option>
              <option value="">Price : low to high</option>
            </select>
          </label>
        </div>
      </div>
      <div className="mt-8 flex">
        {/* Filter */}
        <div
          className={`${
            isFilterOpen ? "w-[300px]" : "hidden"
          } max-md:absolute z-10`}
        >
          <ProductFilter />
        </div>
        {/* Product */}
        <div className="flex-1 p-2 flex flex-wrap  gap-4 justify-center">
          {products.length > 0 &&
            products.map((item) => <ProductItem item={item} key={item.id} />)}
        </div>
      </div>
    </section>
  );
};

export default Product;
