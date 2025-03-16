import { Link } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"
import { logout } from "../auth/auth"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const {t, language, toggleLanguage} = useLanguage();
    const navigate = useNavigate();

    return (
        <div className="header">
            <div className="left-header">
                <h1>{t("title")}</h1>
                <button type="button" onClick={toggleLanguage}>{language === "en" ? "عربي": "English"}</button>
            </div>
            <div className="right-header">
                <Link to='/home' >{t("home")}</Link>
                <Link to='/calendar' >{t("calendar")}</Link>
                <button onClick={() => {logout(); navigate('/Starting')}}>{t("logout")}</button>
            </div>
        </div>  
    )
}

export default Header