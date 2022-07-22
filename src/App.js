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
import Privacy from "./Privacy/Privacy";

function App() {
	return (
		<div className="App">
			{/* <Signup /> */}
			{/* <HeaderLanding /> */}
			{/* <ProductPage /> */}
			{/* <AccountPage /> */}
			{/* <Login /> */}
			{/* <RentalPolicy /> */}
			{/* <FAQ /> */}
			{<Privacy />}
		</div>
	);
}

export default App;
