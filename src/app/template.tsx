import Header from "@/components/MainHeader/Header";
import { ThemeProvider } from "@/components/theme-provider";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Header />
        {children}
      </ThemeProvider>
    </>
  );
}
