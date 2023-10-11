import s from "./style.module.css";

export function PlaceListItem({ id, title, cover }) {
    return (
        <a id={id} href="/" >
            <article className={s.location_card}>
                <span className={s.gradient_overlay}></span>
                <figure className={s.card_figure}>
                    <img className={s.cover} src={cover} alt="" />
                    <figcaption>
                        <h2 className={s.location_title}>{title}</h2>
                    </figcaption>
                </figure>
            </article>
        </a>
    )
}