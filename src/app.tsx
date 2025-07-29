import { ThemeProvider } from "./components/theme-provider";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="lingo-forge-theme">
      <h1>LingoForge</h1>
    </ThemeProvider>
  );
}
