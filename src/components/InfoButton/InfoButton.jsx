import s from "./style.module.css";
import { useState } from 'react';

// InfoButton.js
export function InfoButton({ title, content, isLarge }) {
    const [showInfo, setShowInfo] = useState(null);

    return (
        <div className={`${s.toggle_container} ${isLarge ? s.large : ''}`}>

            <button
                className={s.toggle_button}
                onClick={() => setShowInfo(showInfo === title ? null : title)}
            >
                {title}
                <i className={`bi bi-chevron-down ${showInfo === title ? s.rotate : s.initial} ${s.chevronIcon}`}></i>
            </button>
            {showInfo === title && (
                <div className={s.content}>
                    {Array.isArray(content)
                        ? <ul>{content.map((el, i) => <li key={i}>{el}</li>)}</ul>
                        : content
                    }
                </div>
            )}
        </div>
    );
}
