import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: typeof window !== "undefined" ? localStorage.getItem("shangrila-theme") || "dark" : "dark",
  toggleTheme: () =>
    set((state) => {
      const next = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("shangrila-theme", next);
      document.documentElement.setAttribute("data-theme", next);
      return { theme: next };
    }),
}));
