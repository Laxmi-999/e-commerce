import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./Context/ProductContex";
import PageNavigation from "./PageNavigation";
import styled from "styled-components";
import MyImages from "./MyImages";
import Container from "./Styles/Container";
import FormatPrice from "./Helpers/FormatPrice";
// import { FaTruckDroplet } from "react-icons/fa";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Star from "./Star";
import AddToCart from "./addToCart";

const API = "https://ecomapi-brown.vercel.app/service";
const SingleProduct = () => {
    const { getSingleProducts, isSingleLoading, singleProduct } = useProductContext();

    const { id } = useParams();
    // console.log(singleProduct);

    const {
        id: alias,
        name,
        image,
        title,
        company,
        price,
        Description,
        category,
        stock,
        url,
        colors,
        stars,
        reviews,

    } = singleProduct;

    // console.log("colors are :" + colors);


    useEffect(() => {

        getSingleProducts(`${API}?id=${id}`);
    }, []);

    if(isSingleLoading){
        return <div>Loading................</div>
    }
    console.log("images are"+ image);
    return (
        <Wrapper>
            <PageNavigation  title = {name}/>
            <Container className = "container">
              <div className="grid grid-two-column">
                {/* for  product images */}
                <div className="product-images">
                    <MyImages images={image} />
                </div>

                {/* for product data */}
                <div className="product-data">
                   <h2>{name}</h2>
                   <Star  stars = {stars}  reviews = {reviews} />
                    <p className="product-data-price font-custom">MRP:
                        <del>
                            <FormatPrice  price ={price+25000/100} />
                        </del>
                    </p>
                    <p className="product-data-price product-data-real-price font-custom">
                            Deal of the day:<FormatPrice  price ={price} />    
                    </p>
                    <p className="font-custom">{Description}</p>
                     
                     <div className="product-data-warranty">
                       <div className="product-warranty-data">
                        <TbTruckDelivery className="warranty-icons" />
                            <p className="font-custom">Free Delivery</p>
                       </div>
                       <div className="product-warranty-data">
                        <TbReplace className="warranty-icons" />
                            <p className="font-custom">30 days Replacement</p>
                       </div>
                       <div className="product-warranty-data">
                        <TbTruckDelivery className="warranty-icons" />
                            <p className="font-custom">Luxxy Delivered</p>
                       </div>
                        <div className="product-warranty-data">
                        <MdSecurity className="warranty-icons" />
                             <p className="font-custom">2 years of warranty</p>
                       </div>

                     </div>
                     <div className="product-data-info">
                      <p className="font-custom">Available: <span>{stock >0 ? "In Stock" : "Not Available"}</span></p>
                       <p className="font-custom"> 
                        ID:{ id}
                       </p>
                       <p className="font-custom">
                        Brand: {company}
                       </p>
                     </div>
                     <hr />
                     {stock > 0 && <AddToCart product={singleProduct} />}
              </div>
            </div>
            </Container>
        </Wrapper>
    );

};
const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .grid{
    ${'' /* background-color:blue; */}
    display:grid;
    justify-content:space-between;
    gap:2rem;
    align-items:center;

    @media(max-width:768px){
      ${'' /* background-color:pink; */}
    }
    @media(max-width:480px){
      background-color:red;

    }

  }
  .grid-two-column{
    ${'' /* background-color:pink; */}
    align-items:center;
    justify-content:center;
    padding:2rem;
    margin-right:0;
  }
  .product-images{
    ${'' /* background-color:yellow; */}
    padding:0;
    display: flex;
    width:auto;
    justify-content: center;
    align-items: flex-end;
  }
  .product-data {
    ${'' /* background-color:brown; */}
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icons{
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          font-size:3.5rem;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.color.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }



  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
`;
export default SingleProduct;