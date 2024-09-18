import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/generic/header";
import Footer from "@/components/generic/footer";
import { AuthProvider } from "@/context/appContext";
import WrappedText from "./(feature)/magic/(text)/text";
import { WrapperRealest } from "./(feature)/magic/realest";
import { WrapperDrawer } from "./(feature)/magic/drawer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
// ${geistSans.variable} ${geistMono.variable} 
const montserrat = localFont({
  src: "./fonts/MontserratVF.ttf",
  variable: "--font-monster-mono",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Zhongwen",
  description: "Learn Chinese with LLM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          
          ${montserrat.variable} 
          antialiased md:p-4`}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
             <script
          type="module"
          defer
          src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/grid.js"
        ></script>
               <script
          type="module"
          defer
          src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/mirage.js"
        ></script>
      <AuthProvider>
        <Header />
      <WrapperRealest>
      <WrappedText>
      <main className='bg-background max-md:p-4'>{children}</main>
      </WrappedText>
      </WrapperRealest>
    <Footer />
    </AuthProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}

