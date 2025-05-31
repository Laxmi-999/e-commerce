import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "./Context/Filter_Context";

const Sort = () => {
  const { grid_view, setGridView, setListView, filter_products, sorting } = useFilterContext();

  return (
    <section className="flex flex-col justify-between sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12">
      {/* First column: Grid/List toggle */}
      <div className="flex justify-center sm:justify-start gap-4 mr-[10rem]">
        <button
          className={`p-2 rounded-lg text-2xl sm:text-3xl md:text-3xl ${grid_view ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} hover:bg-blue-600 hover:text-white transition-colors duration-300`}
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          className={`p-2 rounded-lg text-2xl sm:text-3xl md:text-3xl ${!grid_view ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} hover:bg-blue-600 hover:text-white transition-colors duration-300`}
          onClick={setListView}
        >
          <BsList />
        </button>
      </div>
      {/* Second column: Product count */}
      <div className="text-center sm:text-left">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-600">
          {`${filter_products.length} products available`}
        </p>
      </div>
      {/* Third column: Sort dropdown */}
      <div className="sort-selection">
        <form action="#">
          <select
            name="sort"
            id="sort"
            onChange={sorting}
            className="p-2 sm:p-3 rounded-lg border border-gray-300 bg-white text-gray-900 text-base sm:text-lg md:text-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
          >
            <option value="lowest" className="text-base sm:text-lg md:text-xl">
              Price (Lowest)
            </option>
            <option value="#" disabled></option>
            <option value="highest" className="text-base sm:text-lg md:text-xl">
              Price (Highest)
            </option>
            <option value="#" disabled></option>
            <option value="a-z" className="text-base sm:text-lg md:text-xl">
              Name (A-Z)
            </option>
            <option value="#" disabled></option>
            <option value="z-a" className="text-base sm:text-lg md:text-xl">
              Name (Z-A)
            </option>
          </select>
        </form>
      </div>
    </section>
  );
};

export default Sort;