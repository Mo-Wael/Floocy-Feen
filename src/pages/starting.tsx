import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext"
import StartingHeader from "../components/StartingHeader";

const Starting = () => {
    const {t} = useLanguage();
    return (
        <div className="startingScreen">
            <StartingHeader />
            <h3>{t("welcome_message")}</h3>
            <h4>{t("welcome_sub_message")}</h4>
            <Link className="Sbutton" to='/login'>{t("login")}</Link>
            <Link className="Sbutton" to='/signup'>{t("signup")}</Link>
        </div>  
    )
}

export default Starting