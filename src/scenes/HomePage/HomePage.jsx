import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import s from "./style.module.css";
import { PlaceListItem } from "../../components/PlaceListItem/PlaceListItem";
import data from "../../data/logements.json"
import banner from "../../assets/images/Image_source_1.png"



export function HomePage() {
    return (
        <>
            <Header />
            <main>
                <div className={s.banner}>
                    <span className={s.banner_opacity}></span>
                    <img className={s.main_banner} src={banner} alt={banner.title} />
                    <h1 className={s.title}>Chez vous, partout et ailleurs</h1>
                </div>

                <section className={s.container_items}>
                    {data.map(dataLogement =>
                        <PlaceListItem key={dataLogement.id} id={dataLogement.id} cover={dataLogement.cover} title={dataLogement.title} />)}
                </section>
            </main>
            <Footer />
        </>
    )
}