import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import "./App.css";

import Signup from "./Signup/Signup";
import Login from "./Login/Login";

import MainPage from "./LandingPage/MainPage";

import ProductPage from "./ProductPage/ProductPage";
import AccountPage from "./AccountPage/AccountPage";
import RentalPolicy from "./RentalPolicy/RentalPolicy";
import Terms from "./TermsOfUse/Terms";
import FAQ from "./FAQ/FAQ";

import { ProductList } from "./ProductPage/ProductList";
import ItemPage from "./ItemPage/ItemPage";
import { UserCart } from "./AccountPage/UserCart";

import PageMaintenance from "./Wildcards/PageMaintenance";
import PageNotFound from "./Wildcards/PageNotFound";

import { Profile, ProfileEdit } from "./Profile/Profile";

// import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  // <App />
  // </React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="sign-up" element={<Signup />}></Route>
      <Route path="log-in" element={<Login />}></Route>

      <Route path="/" element={<MainPage />}></Route>
      <Route path="products" element={<ProductPage />}>
        <Route path=":category" element={<ProductList />} />
        <Route path="item/:code" element={<ItemPage />} />
        <Route path="item/:code/edit=:cartItem" element={<ItemPage />} />
      </Route>
      <Route path="account" element={<AccountPage />}>
        <Route path="profile" element={<Profile />} />
        <Route path="profile/edit" element={<ProfileEdit />} />
        <Route path="cart" element={<UserCart />}></Route>
        <Route path="purchases" element={<PageMaintenance />} />
        <Route path="wishlist" element={<PageMaintenance />} />
      </Route>

      <Route path="rental-policy" element={<RentalPolicy />}></Route>
      <Route path="faqs" element={<FAQ />}></Route>
      <Route path="terms-of-use" element={<Terms />}></Route>

      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
