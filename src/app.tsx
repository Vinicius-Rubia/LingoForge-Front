import { ThemeProvider } from "./components/theme-provider";
import { RouterApp } from "./routes/router";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="lingo-forge-theme">
      <RouterApp />
    </ThemeProvider>
  );
}
