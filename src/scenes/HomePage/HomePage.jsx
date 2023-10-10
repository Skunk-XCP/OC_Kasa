import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import s from "./style.module.css";
import { PlaceListItem } from "../../components/PlaceListItem/PlaceListItem";

export function HomePage() {
    return (
        <>
            <Header />
            <main>
                <div className={s.banner}>
                    <h1 className={s.title}>Chez vous, partout et ailleurs</h1>
                </div>

                <div className={s.container_items}>
                    <PlaceListItem />
                    <PlaceListItem />
                    <PlaceListItem />
                    <PlaceListItem />
                    <PlaceListItem />
                    <PlaceListItem />
                    <PlaceListItem />
                    <PlaceListItem />
                    <PlaceListItem />
                    <PlaceListItem />
                    <PlaceListItem />
                    <PlaceListItem />
                    <PlaceListItem />
                    <PlaceListItem />
                    <PlaceListItem />
                    <PlaceListItem />
                    <PlaceListItem />
                    <PlaceListItem />
                    <PlaceListItem />
                    <PlaceListItem />
                    <PlaceListItem />
                </div>
            </main>
            <Footer />
        </>
    )
}