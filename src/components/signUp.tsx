import { useState } from "react";
import { signUp } from "../auth/auth";
import { useNavigate } from "react-router-dom";
import StartingHeader from "./StartingHeader";
import { useLanguage } from "../context/LanguageContext";

const SignUp = () => {
    const { t } = useLanguage();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null); // State for error messages
    const navigate = useNavigate();

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault(); 
    
        if (!email || !password) {
            setError(t("pleaseEnterCredentials"));
            return;
        }
    
        try {
            const user = await signUp(email, password);
            if (user) {
                navigate("/home");
            } else { 
                setError(t("invalidCredentials"));
                return;
            }
        } catch (error: any) {
            console.error("Sign-up failed:", error.message);
            setError(error.message);
        }
    };
    

    return (
        <div className="signup">
            <StartingHeader />
            <h1>{t("signup")}</h1>
            <form onSubmit={handleSignUp}>
                <label htmlFor="email">{t("email")}</label>
                <input type="email" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">{t("password")}</label>
                <input type="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

                {error && <p className="error-message">{t('errorMsg')}</p>} {/* Show error if any */}

                <button type="submit">{t("signup")}</button>
            </form>
        </div>
    );
};

export default SignUp;
