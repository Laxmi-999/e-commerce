import React from "react";

const FormatPrice = ({price}) =>{
    return Intl.NumberFormat("en-Np",
    {
        style:"currency",
        currency:"NPR",
        maximumFractionDigits:2,

    }).format(price/100);
}
export default FormatPrice;