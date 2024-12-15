import {Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";

const Home = lazy(() => import("../../src/components/pages/Home.jsx"));
const RegisterPage = lazy(() => import("../../src/components/pages/RegisterPage.jsx"));

const AppRoutes = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
    </Suspense>
);

export default AppRoutes;
