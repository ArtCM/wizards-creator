import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Visualizar Wizards | Wizards Creator",
    description: "Crie suas wizards de forma dinâmica e prática",
  };

export default function WizardsView() {
    return (
        <h1 className="font-bold text-3xl mb-5 border-b-2 border-gray-300">Wizards Criadas</h1>
    );
}