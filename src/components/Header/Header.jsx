import s from "./style.module.css";
import logo from "../../assets/images/logo.png"


export function Header() {
    return <header className={s.container}>
        <img className={s.logo} src={logo} alt="Logo Kasa" />
        <nav>
            <ul className={s.link_list}>
                <li>
                    <a className={s.link_list_element} href="/">Accueil</a>
                </li>
                <li>
                    <a className={s.link_list_element} href="/about">À propos</a>
                </li>
            </ul>
        </nav>
    </header>
}