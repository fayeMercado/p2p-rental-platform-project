import "./App.css";

import HeaderMain from "./Headers/HeaderMain";
import HeaderLanding from "./Headers/HeaderLanding";
import HeaderProducts from "./Headers/HeaderProducts";

import ProductPage from "./ProductPage/ProductPage";

import MainPage from "./LandingPage/MainPage";
import WhyPage from "./LandingPage/WhyPage";
import HowPage from "./LandingPage/HowPage";
import ReviewPage from "./LandingPage/ReviewPage";


function App() {
  return (
    <div className="App">
      {/* <HeaderLanding /> */}
      <ProductPage />
    </div>
  );
}

export default App;
