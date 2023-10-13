import s from "./style.module.css";
import { SlideShow } from "../../components/SlideShow/SlideShow";
import data from "../../data/logements.json";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Page404 } from "../../components/Page404/Page404";
import { Rating } from "../../components/Rating/Rating";

export function Accommodation() {
    const { id } = useParams();
    const navigate = useNavigate();
    const logement = data.find(l => l.id === id);
    const accommodation = data.find((accommodation) => accommodation.id === id);
    if (!accommodation) {
        navigate("404");
        return <Page404 />;
    }


    return (
        <>
            <Header />
            <div className={s.container}>
                <div className={s.slideshow}>
                    {logement && <SlideShow pictures={logement.pictures} />}
                </div>

                <div className={s.content_container}>
                    <div className={s.acommodation_and_tags}>
                        <h2 className={s.accommodation_title}>{accommodation.title}</h2>
                        <p className={s.accommodation_location}>{accommodation.location}</p>
                        <div className={s.tags}> tags
                            {/*  tags ici */}
                        </div>
                    </div>


                    <div className={s.owner_and_rating}>
                        <div className={s.owner}>
                            <img className={s.owner_picture} src={accommodation.host.picture} alt={accommodation.host.name} />
                            <h3 className={s.owner_name}>{accommodation.host.name}</h3>
                        </div>

                        <div className={s.rating}>
                            <Rating value={parseInt(logement.rating, 10)} />

                        </div>
                    </div>
                </div>

                <div className={s.buttons}>
                    <button className={s.description}>Description</button>
                    <button className={s.equipements}>Équipements</button>
                </div>
            </div>
            <Footer />
        </>
    )
}