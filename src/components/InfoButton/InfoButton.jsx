import s from "./style.module.css";
import { useState } from 'react';

// InfoButton.js
export function InfoButton({ title, content, isLarge }) {
    // On initialise un état local showInfo à null. Il servira à savoir quel bouton est ouvert
    const [showInfo, setShowInfo] = useState(false);

    return (
        // div qui change de style en fonction de la prop isLarge
        <div className={`${s.toggle_container} ${isLarge ? s.large : ''}`}>

            {/* Bouton dont la valeur va changer en fonction du bouton cliqué */}
            <button
                className={s.toggle_button}
                onClick={() => setShowInfo(!showInfo)}
            >
                {title}
                <i className={`bi bi-chevron-down ${showInfo ? s.rotate : s.initial} ${s.chevronIcon}`}></i>
            </button>

            {/* Si showInfo est égal au titre du bouton, on affiche le contenu */}
            {showInfo && (
                <div className={s.content}>

                    {/* Si le contenu est un tableau, on le map en une list HTML */}
                    {/* Sinon, on affiche simplement le contenu */}
                    {Array.isArray(content)
                        ? <ul>{content.map((el, i) => <li key={i}>{el}</li>)}</ul>
                        : <span>{content}</span>
                    }
                </div>
            )}
        </div>
    );
}
