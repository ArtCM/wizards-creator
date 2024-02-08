import { Inter } from "next/font/google";
import "../../public/assets/css/globals.css";
import "../../public/assets/css/style.css";
import Navbar from './components/navbar';
import Footer from './components/footer';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />

          <main className="flex flex-col h-full items-center justify-between py-10 px-5">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
