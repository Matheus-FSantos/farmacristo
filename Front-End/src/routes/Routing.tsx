import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Error } from "../pages/error";
import { Search } from "../pages/search";
import { SignIn } from "../pages/auth/signin";
import { SignUp } from "../pages/auth/signup";
import { Profile } from "../pages/auth/profile";
import { LandingPage } from "../pages/landing-page";
import { WorkWithUs } from "../pages/work-with-us";
import { ShoppingCart } from "../pages/auth/shopping-cart";
import { AdminUser } from "../pages/auth/admin-panel/user/AdminUser";
import { AdminProduct } from "../pages/auth/admin-panel/product/AdminProduct";
import { AdminPharmacy } from "../pages/auth/admin-panel/pharmacy/AdminPharmacy";
import { AdminCurriculum } from "../pages/auth/admin-panel/curriculum/AdminCurriculum";


const Routing = (): React.ReactElement => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/search" element={<Search />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/careers" element={<WorkWithUs />} />
				<Route path="/explore" element={<Home />} />
				<Route path="/shopping-cart" element={<ShoppingCart />} />
				<Route path="/admin-panel/users" element={<AdminUser />} />
				<Route path="/admin-panel/cvs" element={<AdminCurriculum />} />
				<Route path="/admin-panel/products" element={<AdminProduct />} />
				<Route path="/admin-panel/pharmacies" element={<AdminPharmacy />} />
				<Route path="*" element={<Error title="404 - Não encontrada!" subtitle="A página que você tentou acessar não foi encontrada." />} />
			</Routes>
		</BrowserRouter>
	);
};

export { Routing };
