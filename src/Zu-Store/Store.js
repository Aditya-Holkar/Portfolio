import { create } from "zustand";

if (typeof window !== "undefined") {
  const initial = localStorage.getItem("shangrila-theme") || "dark";
  document.documentElement.setAttribute("data-theme", initial);
}

export const useThemeStore = create((set) => ({
  theme: typeof window !== "undefined" ? localStorage.getItem("shangrila-theme") || "dark" : "dark",
  ready: false,
  routeLoading: false,
  routeLabel: '',
  setReady: () => set({ ready: true }),
  setRouteLoading: (loading, label) => set({ routeLoading: loading, routeLabel: label || '' }),
  toggleTheme: () =>
    set((state) => {
      const next = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("shangrila-theme", next);
      document.documentElement.setAttribute("data-theme", next);
      return { theme: next };
    }),
}));
