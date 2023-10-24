import s from "./style.module.css";
import { SlideShow } from "../../components/SlideShow/SlideShow";
import data from "../../data/logements.json";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Rating } from "../../components/Rating/Rating";
import { InfoButton } from "../../components/InfoButton/InfoButton";
import { Tags } from "../../components/Tags/Tags";
import { useEffect } from "react";
import { HostInfo } from "../../components/HostInfo/HostInfo";

export function Accommodation() {
    // On récupère la valeur de l'ID grace à useParams()
    const { id } = useParams();

    // Parcours l'objet 'accommodation' dans data, compare l'id avec l'id récupéré de l'url
    const accommodation = data.find((accommodation) => accommodation.id === id);

    // Utilisation du hook useNavigate pour permettre 
    // des redirections programmées dans l'application
    const navigate = useNavigate();

    useEffect(() => {
        // on redirige l'utilisateur vers la page 404 si 
        // on ne trouve pas le accommodation correspondant à l'ID
        if (!accommodation) {
            navigate("/404");
        }
    }, [id, accommodation, navigate]);

    return (
        <>
            <Header />

            {/* On vérifie si 'accommodation' existe. Si oui, on affiche tout le contenu ci-dessous */}
            {accommodation &&
                <div className={s.container}>
                    <div className={s.slideshow}>
                        <SlideShow pictures={accommodation.pictures} />
                    </div>

                    <div className={s.content_container}>
                        <div className={s.acommodation_and_tags}>
                            <h2 className={s.accommodation_title}>{accommodation.title}</h2>
                            <p className={s.accommodation_location}>{accommodation.location}</p>
                            <div className={s.tags}>
                                <Tags tags={accommodation.tags} />
                            </div>
                        </div>

                        <div className={s.host_and_rating}>
                            <div className={s.host}>
                                <HostInfo name={accommodation.host.name} picture={accommodation.host.picture} />
                            </div>

                            <Rating value={parseInt(accommodation.rating, 10)} />
                        </div>
                    </div>

                    <div className={s.buttons}>
                        {[
                            { title: 'Description', content: accommodation.description },
                            { title: 'Équipements', content: accommodation.equipments }
                        ].map((item) => (
                            <InfoButton
                                key={accommodation.id}
                                title={item.title}
                                content={item.content}
                                isLarge={false}
                            />
                        ))}
                    </div>
                </div>
            }
            <Footer />
        </>
    )
}