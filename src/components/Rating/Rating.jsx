import s from "./style.module.css";


export function Rating({ value }) {
    // Création dun tableau pour représenter les 5 étoiles possibles
    const stars = Array.from({ length: 5 }, (_, index) => {
        // Si l'index est inférieur à la valeur du rating, alors l'étoile doit être "full"
        return <i className={`bi ${index < value ? `bi-star-fill ${s.fullStar}` : `bi-star-fill ${s.emptyStar}`}`}></i>;
    });

    return (
        <div>
            {stars.map((star, index) => (
                <span key={index}>{star}</span>
            ))}
        </div>
    );
}
