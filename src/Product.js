import React from "react"; 
import { NavLink } from "react-router-dom";
import FormatPrice from "./Helpers/FormatPrice";
import styled from "styled-components";


const Product = ( curElem ) =>
 
{
   const { id, name, img, category, price } = curElem;
   

    return(
    <Wrapper>  
      <NavLink to = {`/singleproduct/${id}`}>
        <div className="card ">
                <figure>
                    <img className = '' src = {img} alt ={name} />
                    <figcaption className="caption">{category}</figcaption>
                </figure>
        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{<FormatPrice price = {price}/>}</p>
          </div>

            </div>
        </div>
    </NavLink>
</Wrapper>
    );
};

const Wrapper =  styled.section`

@media (max-width: 768px) {
  .card {
    flex-direction: column;
    width: 100%;
    height:auto;
  }
}

@media (max-width: 480px) {
  .card-data-flex {
    flex-direction: column;
    align-items: flex-start;
  }

  .card-data--price {
    margin-top: 10px;
  }
}
`;

export default Product;