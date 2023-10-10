import s from "./style.module.css";

export function PlaceListItem() {
    return (
        <a href="/" className={s.location_card}>
            <img src="" alt="" />
            <h2 className={s.location_title}>Titre de la location</h2>
        </a>
    )
}