import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Signup from "./Signup/Signup";
import Login from "./Login/Login";

import HeaderMain from "./Headers/HeaderMain";
import HeaderLanding from "./Headers/HeaderLanding";
import HeaderProducts from "./Headers/HeaderProducts";

import MainPage from "./LandingPage/MainPage";
import WhyPage from "./LandingPage/WhyPage";
import HowPage from "./LandingPage/HowPage";
import ReviewPage from "./LandingPage/ReviewPage";

import ProductPage from "./ProductPage/ProductPage";
import AccountPage from "./AccountPage/AccountPage";
import RentalPolicy from "./RentalPolicy/RentalPolicy";
import Terms from "./TermsOfUse/Terms";
import FAQ from "./FAQ/FAQ";

import { ProductList } from "./ProductPage/ProductList";
import ItemPage from "./ItemPage/ItemPage";
import { MyCart } from "./AccountPage/MyCart";

import PageMaintenance from "./Wildcards/PageMaintenance";
import PageNotFound from "./Wildcards/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="products" element={<ProductPage />}>
          <Route path="product-list" element={<ProductList />} />
          <Route path=":code" element={<ItemPage />} />
        </Route>
        <Route path="account" element={<AccountPage />}>
          <Route path="profile" element={<PageMaintenance />} />
          <Route path="my-cart" element={<MyCart />} />
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="terms" element={<Terms />}></Route>
        <Route path="rentalpolicy" element={<RentalPolicy />}></Route>
        <Route path="faq" element={<FAQ />}></Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
