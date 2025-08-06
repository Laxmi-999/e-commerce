import React from "react";
import FormatPrice from "./Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "./Context/cart_context";

const CartItems = ({ id, name, color, image, price, amount }) => {
  const { removeItem, setIncrement, setDecrement } = useCartContext();

  return (
    <div className="grid grid-cols-3 md:grid-cols-5 mb-[7rem] items-center justify-center">
      <div className="flex items-center gap-2">
        <div className="cart-img">
          <figure>
            <img src={image} alt={id} className="w-12 h-12 object-contain" />
          </figure>
        </div>
        <div className="flex flex-col">
          <p className="font-custom text-lg md:text-2xl font-bold">{name}</p>
          <div className="flex items-center gap-2">
            <p className="font-custom text-sm md:text-base">color:</p>
            <div
              className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-white"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>
      {/* price */}
      <div className="hidden md:flex justify-center">
        <p className="font-custom text-lg md:text-xl">
          <FormatPrice price={price} />
        </p>
      </div>
      {/* quantity */}
      <div className="flex justify-center ">
        <CartAmountToggle
          className="font-custom flex"
          amount={amount}
          setIncrement={() => setIncrement(id)}
          setDecrement={() => setDecrement(id)}
        />
      </div>
      {/* SubTotal */}
      <div className="hidden md:flex justify-center">
        <p className="font-custom text-lg md:text-xl">
          <FormatPrice price={price * amount} />
        </p>
      </div>
      <div className="flex justify-center">
        <FaTrash
          onClick={() => removeItem(id)}
          className="text-red-600 text-lg md:text-xl cursor-pointer"
        />
      </div>
    </div>
  );
}

export default CartItems;