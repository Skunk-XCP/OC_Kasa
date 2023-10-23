import s from "./style.module.css";
import { Link } from 'react-router-dom';


export function PlaceListItem({ id, title, cover }) {
    return (
        <Link to={`/logement/${id}`}>
            <article className={s.location_card}>
                <span className={s.gradient_overlay}></span>
                <figure className={s.card_figure}>
                    <img className={s.cover} src={cover} alt={title} />
                    <figcaption>
                        <h2 className={s.location_title}>{title}</h2>
                    </figcaption>
                </figure>
            </article>
        </Link>
    )
}