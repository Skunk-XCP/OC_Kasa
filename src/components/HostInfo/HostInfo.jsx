import React from 'react';
import s from './style.module.css';

export function HostInfo({ name, picture }) {
    return (
        <div className={s.host_profile}>
            <img className={s.host_picture} src={picture} alt={name} />
            <h3 className={s.host_name}>{name}</h3>
        </div>
    );
}
