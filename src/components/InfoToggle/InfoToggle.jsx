import s from "./style.module.css";
import React, { useState } from "react";


export function InfoToggle({ description, equipments }) {
    // Utilisation du state pour suivre l'information actuellement affichée ("description" ou "equipments")
    const [showInfo, setShowInfo] = useState(null);

    return (
        <div className={s.buttons_container}>
            <div className={s.toggle_container}>
                <button className={s.toggle_button} onClick={() => setShowInfo(showInfo === "description" ? null : "description")}>
                    Description
                    <i className={`bi bi-chevron-down ${showInfo === 'description' ? s.rotate : s.initial} ${s.chevronIcon}`}></i>
                </button>

                {/* Affichage conditionnel du contenu de la "Description" */}
                {showInfo === "description" && (
                    <div className={s.content}>
                        {description}
                    </div>
                )}
            </div>

            <div className={s.toggle_container}>
                <button className={s.toggle_button} onClick={() => setShowInfo(showInfo === "equipments" ? null : "equipments")}>
                    Équipements
                    <i className={`bi bi-chevron-down ${showInfo === 'equipments' ? s.rotate : s.initial} ${s.chevronIcon}`}></i>
                </button>

                {/* Affichage conditionnel du contenu des "Équipements" */}
                {showInfo === "equipments" && (
                    <ul className={s.content}>

                        {/* Boucle à travers les équipements pour les afficher */}
                        {equipments && equipments.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                )}
            </div>
        </div>
    );

}


