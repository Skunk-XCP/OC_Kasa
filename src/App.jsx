import { Routes, Route } from "react-router-dom";
import { HomePage } from "./scenes/HomePage/HomePage";
import data from "./data/logements.json"
import { Page404 } from "./components/Page404/Page404";
import { Accommodation } from "./scenes/Accommodation/Accommodation";


export function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/logement/:id" element={<Accommodation />} />
                <Route path="/404" element={<Page404 />} />

            </Routes>
        </>

    )
}