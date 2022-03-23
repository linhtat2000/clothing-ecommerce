import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Header from "./components/header/Header";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/Shop";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/SignInAndSignUp";
import CheckoutPage from "./pages/checkout/Checkout";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { setCurrentUser } from "./redux/user/user.actions";
//checkUserSession

import "./App.css";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  let navigate = useNavigate;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/signin" element={<SignInAndSignUpPage />} />
        <Route
          path="/signin"
          element={() =>
            currentUser ? navigate("/") : <SignInAndSignUpPage />
          }
        />
      </Routes>
    </>
  );
};

export default App;
