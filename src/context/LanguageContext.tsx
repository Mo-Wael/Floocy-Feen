import { createContext, useState, useContext } from "react";
import translations from "../languages/translations";

interface LanguageContextType {
    language: string;
    toggleLanguage: () => void;
    t: (key: string) => string;  // Function for translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

    const toggleLanguage = () => {
        const newLanguage = language === "en" ? "ar" : "en";
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
        document.documentElement.dir = newLanguage === "ar" ? "rtl" : "ltr";
    };

    // Translation function
    const t = (key: string) => (translations as Record<string, Record<string, string>>)[language][key] || key;

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
