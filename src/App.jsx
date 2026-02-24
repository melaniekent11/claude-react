import { useEffect } from "react";
import { useDarkMode } from "./hooks/useDarkMode";
import TodoList from "./TodoList";

export default function App() {
  const { theme, toggleTheme } = useDarkMode();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
  }, [theme]);

  return <TodoList />;
}
