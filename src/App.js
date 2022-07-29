import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
import { MyCart } from "./AccountPage/MyCart";

import PageMaintenance from "./Wildcards/PageMaintenance";
import PageNotFound from "./Wildcards/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="sign-up" element={<Signup />}></Route>
        <Route path="log-in" element={<Login />}></Route>

        <Route path="/" element={<MainPage />}></Route>
        <Route path="products" element={<ProductPage />}>
          <Route path=":category" element={<ProductList />} />
          <Route path="item/:code" element={<ItemPage />} />
        </Route>
        <Route path="account" element={<AccountPage />}>
          <Route path="profile" element={<PageMaintenance />} />
          <Route path="my-cart" element={<MyCart />} />
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
}

export default App;
