import s from "./style.module.css";
import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

export function SlideShow({ pictures }) {
    // Index de l'image actuelle
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % pictures.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + pictures.length) % pictures.length);
    };

    return (
        <div className={s.container}>
            {/* Bouton pour aller à l'image précédente */}
            {pictures.length > 1 && (
                <button className={s.previous} onClick={prevSlide}>
                    <i className="bi bi-chevron-left"></i>
                </button>
            )}

            {/* Affichage de l'image actuelle */}
            <img className={s.picture} src={pictures[currentSlide]} alt={`Slide ${currentSlide + 1}`} />

            {/* Bouton pour aller à l'image suivante */}
            {pictures.length > 1 && (
                <button className={s.next} onClick={nextSlide}>
                    <i className="bi bi-chevron-right"></i>
                </button>
            )}
        </div>
    );
}
