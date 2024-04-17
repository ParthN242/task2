import React from "react";
import FilterItems from "./FilterItems";

const ProductFilter = () => {
  return (
    <div className="bg-white">
      <div className="flex gap-2 font-bold text-lg mb-6">
        <input
          type="checkbox"
          name="customizble"
          id="customizble"
          className="w-[20px] h-[20px]"
        />
        <label htmlFor="customizble">CUSTOMIZBLE</label>
      </div>
      {/* Filters */}
      <div className="flex flex-col gap-4 border-t border-gray-300">
        <FilterItems
          heading={"IDEAL FOR"}
          label={"ALL"}
          filters={[
            { name: "MEN" },
            { name: "WOMEN" },
            { name: "Baby & Kids" },
          ]}
        />
        <FilterItems
          heading={"OCCASION"}
          label={"ALL"}
          filters={[{ name: "HOME" }, { name: "PARTY" }]}
        />
        <FilterItems
          heading={"WORK"}
          label={"ALL"}
          filters={[{ name: "MEN" }, { name: "WOMEN" }]}
        />
        <FilterItems
          heading={"FABRIC"}
          label={"ALL"}
          filters={[{ name: "MEN" }, { name: "WOMEN" }]}
        />
        <FilterItems
          heading={"SEGMENT"}
          label={"ALL"}
          filters={[{ name: "MEN" }, { name: "WOMEN" }]}
        />
        <FilterItems
          heading={"SUITABLE FOR"}
          label={"ALL"}
          filters={[{ name: "MEN" }, { name: "WOMEN" }]}
        />
        <FilterItems
          heading={"RAW MATERIALS"}
          label={"ALL"}
          filters={[{ name: "MEN" }, { name: "WOMEN" }]}
        />
        <FilterItems
          heading={"PATTERN"}
          label={"ALL"}
          filters={[{ name: "MEN" }, { name: "WOMEN" }]}
        />
      </div>
    </div>
  );
};

export default ProductFilter;
