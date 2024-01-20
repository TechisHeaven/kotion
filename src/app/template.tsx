import Header from "@/components/MainHeader/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { getServerSession } from "next-auth";
import SessionProvider from "../provider/SessionProvider";
import { Toaster } from "@/components/ui/toaster";

export default async function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <>
      <SessionProvider session={session}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          {children}
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
