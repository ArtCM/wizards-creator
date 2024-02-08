import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Criar Wizard | Wizards Creator",
    description: "Crie suas wizards de forma dinâmica e prática",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        {children}
    </>
  );
}
