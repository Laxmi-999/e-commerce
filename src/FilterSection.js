import React from "react";
import { FaCheck, FaSearch } from "react-icons/fa";
import { useFilterContext } from "./Context/Filter_Context";
import FormatPrice from "./Helpers/FormatPrice";

const FilterSection = () => {
  const {
    filters: { text, color, category, company, minPrice, price, maxPrice },
    updateFilterValue,
    clearFilter,
    all_products,
  } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newVal = data.map((currElem) => currElem[property]);
    if (property === "colors") {
      newVal = newVal.flat();
    }
    return ["all", ...new Set(newVal)];
  };

  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");
  const colorsOnlyData = getUniqueData(all_products, "colors");

  return (
    <section className="relative bg-gray-50 mx-auto top-[3rem] p-5 w-[35vh] sm:my-10 md:max-w-[30vh] lg:my-12 lg:max-w-[30vh] xl:max-w-[30vh]">
      <div className="rounded-xl p-4 shadow-lg ">
        <div className="rounded-lg bg-white  ">
          <div className="flex flex-col gap-6 lg:gap-[5rem]">
            {/* Search Filter */}
            <div className="filter-search group relative">
              <h3 className="mb-2 border-b-2 border-gray-300 pb-1 text-lg font-serif font-bold text-gray-500 sm:text-xl lg:text-2xl">
                Search
              </h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-gray-500" />
                  <input
                    type="text"
                    name="text"
                    placeholder="Search products..."
                    value={text}
                    onChange={updateFilterValue}
                    className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm font-sans text-gray-500 transition-all duration-300 focus:ring-2 focus:ring-gray-200 sm:py-2.5 sm:text-base lg:text-lg"
                  />
                </div>
              </form>
            </div>

            {/* Category Filter */}
            <div className="filter-category">
              <h3 className="mb-2 border-b-2 border-gray-300 pb-1 text-lg font-serif font-bold text-gray-500 sm:text-xl lg:text-2xl">
                Category
              </h3>
              <div className="flex flex-wrap gap-2">
                {categoryOnlyData.map((currElem, index) => (
                  <button
                    key={index}
                    type="button"
                    name="category"
                    value={currElem}
                    onClick={updateFilterValue}
                    className={`rounded-md border px-3 py-1.5 text-sm font-sans capitalize transition-all duration-300 sm:text-base lg:text-lg ${
                      currElem === category
                        ? "border-gray-400 bg-gray-500 text-gray-50"
                        : "border-gray-200 bg-white text-gray-400 hover:bg-gray-100"
                    }`}
                  >
                    {currElem}
                  </button>
                ))}
              </div>
            </div>

            {/* Company Filter */}
            <div className="filter-company">
              <h3 className="mb-2 border-b-2 border-gray-300 pb-1 text-lg font-serif font-bold text-gray-500 sm:text-xl lg:text-2xl">
                Company
              </h3>
              <form action="#">
                <div className="relative">
                  <select
                    name="company"
                    id="company"
                    value={company}
                    onChange={updateFilterValue}
                    className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2 pl-4 pr-10 text-sm font-sans text-gray-500 transition-all duration-300 focus:ring-2 focus:ring-gray-200 sm:py-2.5 sm:text-base lg:text-lg"
                  >
                    {companyOnlyData.map((currElem, index) => (
                      <option
                        key={index}
                        value={currElem}
                        className="text-sm text-gray-500 sm:text-base lg:text-lg"
                      >
                        {currElem}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-300">
                    ▼
                  </span>
                </div>
              </form>
            </div>

            {/* Colors Filter */}
            <div className="filter-colors">
              <h3 className="mb-2 border-b-2 border-gray-300 pb-1 text-lg font-serif font-bold text-gray-500 sm:text-xl lg:text-2xl">
                Colors
              </h3>
              <div className="flex flex-wrap gap-3">
                {colorsOnlyData.map((curColor, index) => {
                  if (curColor === "all") {
                    return (
                      <button
                        key={index}
                        type="button"
                        value={curColor}
                        name="color"
                        onClick={updateFilterValue}
                        className={`rounded-md border px-3 py-1.5 text-sm font-sans capitalize transition-all duration-300 sm:text-base lg:text-lg ${
                          color === curColor
                            ? "border-gray-400 bg-gray-500 text-gray-50"
                            : "border-gray-200 bg-white text-gray-400 hover:bg-gray-100"
                        }`}
                      >
                        All
                      </button>
                    );
                  }
                  return (
                    <button
                      key={index}
                      type="button"
                      value={curColor}
                      name="color"
                      style={{ backgroundColor: curColor }}
                      onClick={updateFilterValue}
                      className={`relative h-7 w-7 rounded-full border border-gray-300 transition-all duration-300 sm:h-8 sm:w-8 ${
                        color === curColor
                          ? "ring-2 ring-gray-400 ring-offset-gray-50"
                          : "hover:scale-105"
                      }`}
                      title={curColor}
                    >
                      {color === curColor && (
                        <FaCheck className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-50 text-xs sm:text-sm" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Filter */}
            <div className="filter-price">
              <h3 className="mb-2 border-b-2 border-gray-300 pb-1 text-lg font-serif font-bold text-gray-500 sm:text-xl lg:text-2xl">
                Price
              </h3>
              <p className="mb-2 text-sm font-sans text-gray-400 sm:text-base lg:text-lg">
                <FormatPrice price={price} />
              </p>
              <input
                type="range"
                name="price"
                min={minPrice}
                max={maxPrice}
                value={price}
                onChange={updateFilterValue}
                className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-gray-400"
              />
            </div>

            {/* Clear Filters */}
            <div className="filter-clear">
              <button
                onClick={clearFilter}
                className="w-full rounded-lg bg-red-500 px-6 py-2.5 text-sm font-sans font-semibold text-gray-50 transition-all duration-300 hover:bg-red-600 sm:w-auto sm:text-base lg:text-lg"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;