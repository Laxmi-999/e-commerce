

// useReducer hooks calls the function and performs the updates  while calling the calling the functions 
// useReducer also use for the complex state management operation, while changing the  states, sometime 
//we need to perform multiple state updates.
const FilterReducer = (state, action) =>{
    
    switch (action.type) 
    {
        case "LOAD_FILTER_PRODUCTS":
            return{
                ...state,
                filter_products:[...action.payload],
                all_products: [...action.payload],
             };

        case "SET_GRID_VIEW":
            return{
                ...state,
                grid_view:true,
            };

        case "SET_LIST_VIEW":
            return{
                ...state,
                grid_view:false,
            };


        case "GET_SORT_VALUE":
            console.log(action.payload);
         return {
            ...state,
             sorting_value:action.payload,
             
              }; 
         case "SORTING_PRODUCTS":
            let newSortData;
            const { filter_products, sorting_value } = state;
            const tempSortProduct = [...filter_products];


            const sortingProducts = (a,b) =>{
                if(sorting_value === "lowest")
                {
                    return a.price-b.price;
                }
                if(sorting_value === "highest"){
                    return b.price-a.price;
                }

                if(sorting_value === "a-z" && a.name && b.name) {
                    return a.name.localeCompare(b.name);
                }

                if(sorting_value === "z-a" && a.name && b.name){
                    return b.name.localeCompare(a.name);
                }
            };   

            newSortData = tempSortProduct.sort(sortingProducts);

            return{
                ...state,
                filter_products: newSortData,
            }
            case "UPDATE_FILTERS_VALUE":
                const {name, value } = action.payload;
                return{
                    ...state,
                    filters : {
                        ...state.filters,
                        [name] : value,
                    }
                }
                case "FILTER_PRODUCTS":
                    let { all_products } = state;
                    let tempFilterProduct = [...all_products];
              
                    const { text, category, company, color } = state.filters;
              
                    if (text) {
                      tempFilterProduct = tempFilterProduct.filter((curElem) => {
                       return curElem.name && curElem.name.toLowerCase().includes(text.toLowerCase());
                      });
                    };
                    if (category !== "all"){
                        tempFilterProduct = tempFilterProduct.filter(
                            (currElem) => currElem.category === category
                        );
                      }
                      if (company !== "all"){
                        tempFilterProduct = tempFilterProduct.filter(
                            (currElem) => currElem.company.toLowerCase() === company.toLowerCase()
                        );
                      }
                      if (color !== "all"){
                        tempFilterProduct = tempFilterProduct.filter((currElem) =>{
                            currElem.colors.includes(color);
                        });
                      }
              return{
                ...state,
                filter_products:tempFilterProduct,     
                };
              
        default:
            return state;
    };
};

export default FilterReducer;