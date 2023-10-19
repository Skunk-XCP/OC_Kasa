import s from "./style.module.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

export function Page404() {
    return (
        <>
            <Header />
            <div className={s.container}>
                <h2 className={s.error_404}>404</h2>
                <p className={s.error_message}>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className={s.error_link}>
                    Retourner sur la page d'accueil
                </Link>
            </div>
            <Footer />
        </>
    )
}