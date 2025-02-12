import { Link } from "react-router-dom"
import { useLanguage } from "../context/LanguageContext"
interface IProps {

}

const Header = ({} : IProps) => {
    const {t, language, toggleLanguage} = useLanguage()

    return (
        <div className="header">
            <div className="left-header">
                <h1>{t("title")}</h1>
                <button type="button" onClick={toggleLanguage}>{language === "en" ? "عربي": "English"}</button>
            </div>
            <div className="right-header">
                <Link to='/' >{t("home")}</Link>
                <Link to='/calendar' >{t("calendar")}</Link>
            </div>
        </div>  
    )
}

export default Header