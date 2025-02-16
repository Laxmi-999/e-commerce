import React from "react";
import styled from "styled-components";
import { MdGridView } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import { BsFillGridFill, BsList } from "react-icons/bs";
import Button from "./Styles/Button";
import { useFilterContext } from "./Context/Filter_Context";

const Sort = () => {
    const {grid_view, setGridView, setListView, filter_products, sorting} = useFilterContext();
   //  console.log(sorting);
    return(
     <Wrapper className="sort-section">
        {/* first-column */}
        <div className="sorting-list--grid">
        <Button
          className={grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setGridView}>
          <BsFillGridFill className="icon" />
        </Button>

        <Button
          className={!grid_view ? "active sort-btn" : " sort-btn"}
          onClick={setListView}>
          <BsList className="icon" />
        </Button>
      </div>
        {/* second-column */}
        <div className="product-data">
            <p className="font-custom">{`${filter_products.length} products availaible`}</p>
        </div>
        {/* third-column */}
        <div className="sort-selection">
            <form action ="#">
             <label htmlFor="sort"></label>
               <select
               name = "sort"
               id="sort"
               onChange = {sorting}
               className="sort-selection--style font-custom">
               <option className="sort-selection-option font-custom" value = "lowest">price(lowest)</option>
               <option value = "#" disabled></option>
               <option  className="sort-selection-option font-custom" value = "highest">price(highest)</option>
               <option  value = "#" disabled></option>
               <option className="sort-selection-option font-custom" value = "a-z">price(a-z)</option>
               <option value = "#" disabled></option>
               <option className="sort-selection-option font-custom" value = "z-a">price(z-a)</option>
               </select>

            </form>
        </div>
    </Wrapper>
    
    );
};
const Wrapper = styled.section`

 display:flex;
 justify-content:space-between;
 ${'' /* background-color:pink; */}
 margin-top:5rem;
 font-size:1.5rem;

 .sorting-list--grid{
    display:flex;
   gap:2rem;
 }
 .sort-btn{
    background-color: ${({ theme}) => theme.color.bg};
    padding: 0.8rem 1rem;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color:black;

 }
 .icon{
    font-size:2.5rem;

    @media(max-width:768px){
      font-size:2rem;
    }
    @media(max-width:480px){
      font-size:1.5rem;
    }
 }
.product-data p{
    font-size:2.5rem;

    @media(max-width:768px) {
     
      font-size:2rem;

    }
    @media (max-width: 480px)  {
      font-size:1.5rem;

    }

}
 .active{
    background-color:black;
    color:white;
 }
 .sort-selection .sort-selection--style{
    padding:1rem;
    cursor:pointer;
    font-size:2rem;

    @media(max-width:768px){
      font-size:1.5rem;
    }
    @media(max-width:768px){
      font-size:1rem;
    }

    .sort-selection-option{
    font-size: 2.5rem;
    padding: 0.5rem 0;
    cursor:pointer;
    height:2rem;

    @media(max-width:768px){
      font-size:1.5rem;
    }
    @media(max-width:768px){
      font-size:1rem;
    }
  }
 };
`;
export default Sort;