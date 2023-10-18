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
    const { id } = useParams();
    const navigate = useNavigate();
    const logement = data.find(l => l.id === id);
    const accommodation = data.find((accommodation) => accommodation.id === id);

    useEffect(() => {
        if (!logement) {
            navigate("/404");
        }
    }, [id]);

    return (
        <>
            <Header />
            {logement &&
                <div className={s.container}>
                    <div className={s.slideshow}>
                        <SlideShow pictures={logement.pictures} />
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

                            <Rating value={parseInt(logement.rating, 10)} />
                        </div>
                    </div>

                    <div className={s.buttons}>
                        {[
                            { title: 'Description', content: accommodation.description },
                            { title: 'Équipements', content: accommodation.equipments }
                        ].map((item, index) => (
                            <InfoButton
                                key={index}
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