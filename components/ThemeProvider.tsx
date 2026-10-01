"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
    theme: Theme;
    isDark: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(
    undefined
);

export function ThemeProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        const saved = localStorage.getItem("theme");

        const initialTheme: Theme =
            saved === "dark" ? "dark" : "light";

        setTheme(initialTheme);

        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add(initialTheme);
    }, []);

    function toggleTheme() {
        const newTheme: Theme =
            theme === "dark" ? "light" : "dark";

        console.log("Changing theme:", theme, "→", newTheme);

        setTheme(newTheme);

        localStorage.setItem("theme", newTheme);

        document.documentElement.classList.remove(
            "dark",
            "light"
        );

        document.documentElement.classList.add(newTheme);
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                isDark: theme === "dark",
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            "useTheme must be used inside ThemeProvider"
        );
    }

    return context;
}