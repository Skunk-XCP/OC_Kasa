import s from "./style.module.css";


export function Rating({ value }) {
    // Créons un tableau de 5 éléments pour représenter les 5 étoiles possibles
    const stars = Array.from({ length: 5 }, (_, index) => {
        // Si l'index est inférieur à la valeur du rating, alors l'étoile doit être "allumée"
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
