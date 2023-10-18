import { Routes, Route } from "react-router-dom";
import { HomePage } from "./scenes/HomePage/HomePage";
import { Page404 } from "./components/Page404/Page404";
import { Accommodation } from "./scenes/Accommodation/Accommodation";
import { AboutPage } from "./scenes/AboutPage/AboutPage";


export function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/logement/:id" element={<Accommodation />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/404" element={<Page404 />} />
            </Routes>
        </>
    )
}