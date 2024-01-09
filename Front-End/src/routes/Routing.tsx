import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Error } from "../pages/error";
import { LandingPage } from "../pages/landing-page";

const Routing = (): React.ReactElement => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home />}/>
                <Route path="/explore" element={ <LandingPage />}/>
                <Route path="*" element={ <Error />}/>
            </Routes>
        </BrowserRouter>
    );
}

export { Routing };
