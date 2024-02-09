import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Visualiza Wizard | Wizards Creator",
    description: "Crie suas wizards de forma dinâmica e prática",
  };


export default function WizardsView({
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
