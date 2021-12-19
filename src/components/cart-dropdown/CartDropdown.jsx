import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/CartItem";

import CustomButton from "../custom-button/CustomButton";

import "./CartDropdown.styles.scss";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, toggleCartHidden }) => {
  let navigate = useNavigate();
  function handleClick() {
    navigate("./checkout");
    toggleCartHidden();
  }

  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}

      <CustomButton onClick={handleClick}>Go to Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
