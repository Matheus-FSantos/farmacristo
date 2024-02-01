import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Error } from "../pages/error";
import { SignIn } from "../pages/auth/signin";
import { SignUp } from "../pages/auth/signup";
import { LandingPage } from "../pages/landing-page";
import { WorkWithUs } from "../pages/work-with-us";
import { NewProduct } from "../pages/auth/new-product";
import { ShoppingCart } from "../pages/auth/shopping-cart";

const Routing = (): React.ReactElement => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/explore" element={<LandingPage />} />
				<Route path="/new-product" element={<NewProduct />} />
				<Route path="/careers" element={<WorkWithUs />} />
				<Route path="/shopping-cart" element={<ShoppingCart />} />
				<Route path="*" element={<Error title="404 - Não encontrada!" subtitle="A página que você tentou acessar não foi encontrada." />} />
			</Routes>
		</BrowserRouter>
	);
};

export { Routing };
