import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Error } from "../pages/error";
import { SignIn } from "../pages/auth/signin";
import { SignUp } from "../pages/auth/signup";
import { LandingPage } from "../pages/landing-page";
import { WorkWithUs } from "../pages/work-with-us";
import { NewProduct } from "../pages/auth/new-product";
import { ShoppingCart } from "../pages/auth/shopping-cart";
import { AdminPanel } from "../pages/auth/admin-panel";
import { NewPharmacy } from "../pages/auth/new-pharmacy/NewPharmacy";
import { AdminHome } from "../pages/auth/admin-panel/home/AdminHome";
import { AdminProduct } from "../pages/auth/admin-panel/product/AdminProduct";
import { AdminPharmacy } from "../pages/auth/admin-panel/pharmacy/AdminPharmacy";
import { AdminUser } from "../pages/auth/admin-panel/user/AdminUser";

const Routing = (): React.ReactElement => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/careers" element={<WorkWithUs />} />
				<Route path="/explore" element={<LandingPage />} />
				<Route path="/admin-panel" element={<AdminPanel />} />
				<Route path="/new-product" element={<NewProduct />} />
				<Route path="/new-pharmacy" element={<NewPharmacy />} />
				<Route path="/shopping-cart" element={<ShoppingCart />} />
				<Route path="/admin-panel/home" element={<AdminHome />} />
				<Route path="/admin-panel/product" element={<AdminProduct />} />
				<Route path="/admin-panel/pharmacy" element={<AdminPharmacy />} />
				<Route path="/admin-panel/user" element={<AdminUser />} />
				<Route path="*" element={<Error title="404 - Não encontrada!" subtitle="A página que você tentou acessar não foi encontrada." />} />
			</Routes>
		</BrowserRouter>
	);
};

export { Routing };
