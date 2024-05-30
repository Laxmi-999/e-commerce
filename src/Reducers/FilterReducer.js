

// useReducer hooks calls the function and performs the updates  while calling the calling the functions 
// useReducer also use for the complex state management operation, while changing the  states, sometime 
//we need to perform multiple state updates.
const FilterReducer = (state, action) => {
    // console.log("type is" + action.type);

    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            let priceArr = action.payload.map((curElem) => curElem.price);
            // console.log(priceArr);

            // to find the maximum price from the list of the prices //
            let maxPrice = priceArr.reduce(
                (initalVal, CurVal ) => Math.max(initalVal, CurVal), 0
    

            );
            console.log(maxPrice);
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters:{...state.filters,maxPrice, price:maxPrice }
            };

        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true,
            };

        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,
            };


        case "GET_SORT_VALUE":
            console.log(action.payload);
            return {
                ...state,
                sorting_value: action.payload,

            };
        case "SORTING_PRODUCTS":
            let newSortData;
            const { filter_products, sorting_value } = state;
            const tempSortProduct = [...filter_products];


            const sortingProducts = (a, b) => {
                if (sorting_value === "lowest") {
                    return a.price - b.price;
                }
                if (sorting_value === "highest") {
                    return b.price - a.price;
                }

                if (sorting_value === "a-z" && a.name && b.name) {
                    return a.name.localeCompare(b.name);
                }
                // console.log(a.name.localeCompare(b.name));

                if (sorting_value === "z-a" && a.name && b.name) {
                    return b.name.localeCompare(a.name);
                }
            };

            newSortData = tempSortProduct.sort(sortingProducts);

            return {
                ...state,
                filter_products: newSortData,
            }
        case "UPDATE_FILTERS_VALUE":
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            }
        case "FILTER_PRODUCTS":
            let { all_products } = state;
            let tempFilterProduct = [...all_products];

            const { text, category, company, color, price } = state.filters;
            // console.log("color tapped" + color);

            if (text) {
                tempFilterProduct = tempFilterProduct.filter((curElem) => {
                    return curElem.name && curElem.name.toLowerCase().includes(text.toLowerCase());
                });
            };
            if (category !== "all") {
                tempFilterProduct = tempFilterProduct.filter(
                    (currElem) => currElem.category === category
                );
            }
            if (company !== "all") {
                tempFilterProduct = tempFilterProduct.filter(
                    (currElem) => currElem.company.toLowerCase() === company.toLowerCase()
                );
            }
            if (color !== "All") {
                tempFilterProduct = tempFilterProduct.filter((currElem) =>
                    currElem.colors.includes(color)
                );

            }
            if(price === 0){
                tempFilterProduct = tempFilterProduct.filter((currElem) => 
                currElem.price === price);
            }
            else
            {
                tempFilterProduct = tempFilterProduct.filter((currElem) => 
                currElem.price < price || currElem.price === price);
            }

            // console.log("the state is" + state.color);

            return {
                ...state,
                filter_products: tempFilterProduct,
            };
          case "CLEAR_FILTER":
         return{
            ...state,
            filters: {
                ...state.filters,
                text: "",
                category: "all",
                company: "all",
                color: "All",
                maxPrice:0,
                price: state.filters.maxPrice,
                minPrice:state.filters.minPrice,
              
            },
        
          }


        default:
            return state;
    }
};

export default FilterReducer;