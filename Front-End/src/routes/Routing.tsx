import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Error } from "../pages/error";
import { SignIn } from "../pages/auth/signin";
import { SignUp } from "../pages/auth/signup";
import { LandingPage } from "../pages/landing-page";
import { WorkWithUs } from "../pages/work-with-us";
import { ShoppingCart } from "../pages/auth/shopping-cart";
import { AdminHome } from "../pages/auth/admin-panel/home/AdminHome";
import { AdminUser } from "../pages/auth/admin-panel/user/AdminUser";
import { AdminProduct } from "../pages/auth/admin-panel/product/AdminProduct";
import { AdminPharmacy } from "../pages/auth/admin-panel/pharmacy/AdminPharmacy";

const Routing = (): React.ReactElement => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/careers" element={<WorkWithUs />} />
				<Route path="/explore" element={<LandingPage />} />
				<Route path="/shopping-cart" element={<ShoppingCart />} />
				<Route path="/admin-panel" element={<AdminHome />} />
				<Route path="/admin-panel/users" element={<AdminUser />} />
				<Route path="/admin-panel/products" element={<AdminProduct />} />
				<Route path="/admin-panel/pharmacies" element={<AdminPharmacy />} />
				<Route path="*" element={<Error title="404 - Não encontrada!" subtitle="A página que você tentou acessar não foi encontrada." />} />
			</Routes>
		</BrowserRouter>
	);
};

export { Routing };
