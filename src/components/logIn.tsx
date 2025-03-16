import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { login } from "../auth/auth";
import StartingHeader from "./StartingHeader";
import { useLanguage } from "../context/LanguageContext";

const Login = () => {
    const { t } = useLanguage();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null); // State for error messages
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            setError(t("pleaseEnterCredentials"));
            return;
        }

        try {
            const user = await login(email, password);

            if (user) {
                navigate("/home");
            } else { 
                setError(t("invalidCredentials"));
                return;
            }
        } catch (error : any) {
            console.error("Login failed:", error.message);
            setError(error.message);
        }
    };

    return (
        <div className="login">
            <StartingHeader />
            <h1>{t("login")}</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">{t("email")}</label>
                <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">{t("password")}</label>
                <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                {error && <p className="error-message">{t('errorMsg')}</p>} {/* Show error if any */}

                <button type="submit">{t("login")}</button>
            </form>
        </div>
    );
};

export default Login;
