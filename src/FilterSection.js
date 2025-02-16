import React from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { useFilterContext } from "./Context/Filter_Context";
import FormatPrice from "./Helpers/FormatPrice";

const FilterSection = () => {
  const {
    filters: {text, color, category, company, minPrice, price, maxPrice},  
    updateFilterValue,
     all_products,  
     clearFilter,
        } = useFilterContext();


  // console.log("text is" + color);
  const getUniqueData = (data, property) => {
    let newVal = data.map((currElem) => {
      return currElem[property];
    });

    if (property === "colors") {
      // return (newVal =  ["all", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }

    return (newVal = ["All", ...new Set(newVal)]);
    //  console.log(newVal);
  };


  //    WE NEED UNIQUE Data
  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");
  const colorsOnlyData = getUniqueData(all_products, "colors");
  // console.log(colorsOnlyData);





  return (
    <Wrapper className="wrapper">
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>
      <div className="filter-category">
        <h3 className="font-custom">category</h3>
        <div className="category-items">
          {categoryOnlyData.map((currElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={currElem}
                className={`font-custom ${currElem === category ? "active" : ""} cat-items` }
                onClick={updateFilterValue}
              >{currElem}

              </button>
            );
          }
          )}
        </div>
      </div>
      <div className="filter-company">
        <h3 className="font-custom">company</h3>
        <form action="#">
          <label  className='company-select font-custom' htmlFor="company"></label>
          <select
            name="company"
            id="company"
            className="filter-compnay--select font-custom"
            onClick={updateFilterValue}>
            {companyOnlyData.map((currElem, index) => {
              return (
                <option key={index} value={currElem} id="company" className="company-selection--option font-custom">
                  {currElem}
                </option>
              );
            })
            }
          </select>
        </form>
      </div>
      <div className="filter-colors colors">
        <h3 className="font-custom">colors</h3>
        <div className="filter-color-style">
          {colorsOnlyData.map((curColor, index) => {

            //console.log(curColor);
            //console.log(color);

            if (curColor === "All") {

              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  className="color-all--style font-custom"
                  onClick={updateFilterValue}>
                  all
                </button>
              );
            }
            else {
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  style={{ backgroundColor: curColor }}
                  className = {`font-custom ${color === curColor ? "btnStyle active" : "btnStyle"} color-menu`}
                  onClick={updateFilterValue}>
                  {color === curColor ? <FaCheck className="checkStyle" /> : null}
                </button>
              );
            }

          })}
        </div>
      </div>
      <div className="fileter_price">
       <h3 className="font-custom">Price</h3>
        <p className="format-price font-custom"> 
           <FormatPrice  price = {price} />
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          className="price-range font-custom"
          onChange={updateFilterValue}
        />
      </div>
      <div className="filter-clear">
       <button className="btn clr-filter-btn rounded-[1rem] font-custom" onClick={clearFilter}>Clear Filters</button>

      </div>
    </Wrapper>

  );
}
const Wrapper = styled.section`
margin:5rem 0;
display:flex;
flex-direction:column;
gap:3rem;



h3 {
    padding: 2rem 0;
    font-size: bold;
    color:black;
    font-weight:500;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.color.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.color.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.color.btn};
      }
    }
  }

  .filter-company .filter-compnay--select {
    padding:1rem;
    cursor:pointer;
    font-size:2rem;
    height:auto;
    width:100%;

    .company-selection--option{
    font-size: 2.5rem;
    padding: 0.5rem 0;
    cursor:pointer;
    height:2rem;
    }


    ${'' /* height:30vh;
    border-radius:1px;
    padding: 0.6rem 1rem;
    width: 80%;
    font-size: 3em;
    color: ${({ theme }) => theme.color.text};
    text-transform: capitalize; */}
  }
  ${'' /* .company-selection--style{
    font-size: 2.5rem;
    padding: 0.5rem 0;
    cursor:pointer;
    height:2rem;
  } */}

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
  height:auto;
  width:auto;
  padding:1rem;
  font-size: 2rem;
  background-color: #ec7063;
  color: #000;
  }

  @media (max-width: 768px) {

      margin:5rem 0;
      display:flex;
      flex-direction:row;
      justify-content:space-between;
      justify:start;
      align:center;
      ${'' /* background-color:red; */}
      width:auto;

      .filter-search {
    input {
      margin-top:15px;
      align:center;
      justify:center;
      font-size:1rem
      padding: 0.6rem 1rem;
      width: 15vh;
    }
  }
  .filter-category {

    h3{
      font-weight:bold;
      justify:start;
      margin-left:auto;
      ${'' /* background-color:red; */}
      padding:0;
    }
    .cat-items {
      display: flex;
      font-size:1rem;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
    }
  }
  .filter-colors{
    
    h3{
      padding:0;
      font-weight:bold;

    
    }
    .color-all--style{
        font-size:1rem;
      }
      .btnStyle {
    width: 1.5rem;
    height: 1.5rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 0.5rem;
   

  }
  .checkStyle {
    font-size: 1rem;
    justify:center;
    
  }
  }
    .filter-color-style{
      ${'' /* background-color:red; */}
      justify-content:start;
      width:auto;
    }
    .filter-company {

      h3{
        font-weight:bold;
        ${'' /* background-color:red; */}
        padding:0;
      }

    .filter-compnay--select{

    cursor:pointer;
    font-size:1rem;
    height:auto;
    width:auto;
    ${'' /* background-color:yellow; */}

    .company-selection--option{

    font-size: 1rem;
    padding: 0.5rem 0;
    cursor:pointer;
    height:1.5rem;
    }
   

    } 
  }
  .fileter_price{
    h3{
      font-weight:bold;
      padding:0;
    }
    
     
      
  }
    .format-price{
    font-size:1rem;
  }

  .filter-clear .btn {
  height:auto;
  width:auto;
  padding:5px;
  font-size: 1.5rem;
  }
  
  }

  @media(max-width:1024px)
{
  flex-direction:column;

  .filter-category {

h3{
  font-size:1rem;
  font-weight:bold;
  justify:start;
  margin-left:auto;
  ${'' /* background-color:red; */}
  padding:0;
}
${'' /* 
 */}
}

}
`;

export default FilterSection;