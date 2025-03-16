import { useLanguage } from "../context/LanguageContext"

const StartingHeader = () => {
    const {t, language, toggleLanguage} = useLanguage()

    return (
        <div className="header">
            <div className="left-header">
                <h1>{t("title")}</h1>
            </div>
            <div className="right-header">
                <button type="button" onClick={toggleLanguage}>{language === "en" ? "عربي": "English"}</button>
            </div>
        </div>
    )
}

export default StartingHeader