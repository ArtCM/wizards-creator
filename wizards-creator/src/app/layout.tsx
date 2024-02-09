import { Inter } from "next/font/google";
import "../../public/assets/css/globals.css";
import "../../public/assets/css/style.css";
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import { AntdRegistry } from "@ant-design/nextjs-registry";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <AntdRegistry>
          <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex flex-col h-full items-center justify-center py-10 px-5 mx-auto container">{children}</main>

            <Footer />
          </div>
        </AntdRegistry>
      </body>
    </html>
  );
}
