import React from "react";
import styled from "styled-components";
import {useFilterContext} from "./Context/Filter_Context";

const FilterSection = () =>{
    const {
        filters: {text}, updateFilterValue, all_products, category, company, colors } = useFilterContext();


  const getUniqueData = (data, property) => {
    let newVal = data.map((currElem) => {
        return currElem[property];
  });

  if(property === "colors"){
    // return (newVal =  ["all", ...new Set([].concat(...newVal))]);
    newVal = newVal.flat();
  }

  return (newVal = ["all", ...new Set(newVal)]);
  //  console.log(newVal);
  };


    //    WE NEED UNIQUE Data
    const categoryOnlyData = getUniqueData (all_products, "category");
    const companyOnlyData = getUniqueData (all_products, "company");
    const colorsOnlyData = getUniqueData (all_products, "colors");
    // console.log(companyOnlyData);





    return(
        <Wrapper>
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
          <h3>category</h3>
          <div>
          {categoryOnlyData.map((currElem, index) =>{
            return(
            <button
            key = {index}
            type="button"
            name ="category"
            value ={currElem}
            className={currElem === category ? "active" : ""}
            onClick={updateFilterValue}
            >{currElem}

            </button>
          );}
          )}
          </div>
       </div>
       <div className="filter-company">
        <h3>company</h3>
         <form action = "#">
         <label htmlFor="company"></label>
          <select 
          name= "company"
          id="company"
          className="filter-compnay--select"
          onClick ={updateFilterValue}>
          {companyOnlyData.map((currElem, index) =>{
            return(
              <option key ={index} value = {currElem} id ="company" className="company-selection--option">
              {currElem}
              </option>
              );})
          }
          </select>
         </form>
       </div>
       <div className="filter-colors colors">
       <h3>colors</h3>
        <div className="filter-colors--style">
    
        {colorsOnlyData.map((currColor, index) =>{
          return(
            <button
            key={index}
            name ="colors"
            value = {currColor}
            type="button" 
            style={{backgroundColor: currColor}}
            className="btnStyle"
            onClick={updateFilterValue}>
            {colors === currColor ? "" : null}
            </button>
          );
        })
        }

        </div>
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
    background-color: #ec7063;
    color: #000;
  }


`;

export default FilterSection;