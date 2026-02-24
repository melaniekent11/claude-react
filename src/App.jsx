import { useEffect } from "react";
import { useDarkMode } from "./hooks/useDarkMode";
import DarkModeToggle from "./components/DarkModeToggle";
import TodoList from "./TodoList";

export default function App() {
  const { theme, toggleTheme } = useDarkMode();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
  }, [theme]);

  return (
    <>
      <DarkModeToggle isDark={theme === "dark"} toggleTheme={toggleTheme} />
      <TodoList />
    </>
  );
}
