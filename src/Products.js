import React from "react";
import styled from "styled-components";
import ProductList from "./ProductList";
import Sort from "./Sort";
import FilterSection from "./FilterSection";
import { useFilterContext } from "./Context/Filter_Context";
import FilterReducer from "./Reducers/FilterReducer";
import { MdGridView } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import GridView from "./Views/GridView";
import ListView from "./Views/ListView";

const Product = () =>
{
    return(
        <Wrapper>
            <div className="container grid grid-filter-column">
             <div className="filter-products">
                  <FilterSection />
             </div>

             <section className="product-sort--view">
              <div className="sort-products">
                {/* <div className="filter-icons">
                  <MdGridView onClick = {GridView} />
                  <FaListUl onClick={ListView} />
                </div> */}
                <Sort />
              </div>
              <div className="view-products">
                <ProductList />
              </div>
               

             </section>

            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
  .grid-filter-column{
    grid-template-columns: 0.2fr 1fr;
  }
  .filter-icons{
    ${'' /* background-color:yellow; */}
    position:relative;
    width:10%;
    height:auto;
    display:flex;
    justify-content:space-between;
    padding:10px;
    font-size:2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;
export default Product;