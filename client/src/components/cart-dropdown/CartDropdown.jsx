import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/CartItem";

import CustomButton from "../custom-button/CustomButton";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from "./cartDropdown.styles";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("./checkout");
    dispatch(toggleCartHidden());
  };

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>

      <CartDropdownButton onClick={handleClick}>
        Go to Checkout
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
