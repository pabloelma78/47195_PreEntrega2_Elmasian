import React from 'react';
import {BsCart4} from 'react-icons/bs'

const CartWidget = () => {
  return (
    <div className="cart-widget col-2">
      <BsCart4/>
      <span className="text-sm">0</span>
    </div>
  );
};

export default CartWidget;