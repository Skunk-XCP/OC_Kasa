import s from "./style.module.css";
import logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom";


export function Header() {
    return (
        <header className={s.container}>
            <img className={s.logo} src={logo} alt="Logo Kasa" />
            <nav>
                <ul className={s.link_list}>
                    <li>
                        <Link className={s.link_list_element} href="/">Accueil</Link>
                    </li>
                    <li>
                        <Link className={s.link_list_element} href="/about">À propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}