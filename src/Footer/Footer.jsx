import s from "./style.module.css";
import logo from "../assets/images/logoBlanc.png"

export function Footer() {
    return <footer className={s.container}>
        <img className={s.logo} src={logo} alt="Logo Kasa" />
        <p className={s.copyrightInfo}>© 2020 Kasa. All rights reserved</p>
    </footer>
}