import type { Metadata } from "next";
import WizardCard from '../components/WizardCard';
import React from 'react';

export const metadata: Metadata = {
    title: "Visualizar Wizards | Wizards Creator",
    description: "Crie suas wizards de forma dinâmica e prática",
  };

export default function WizardsView() {
    return (
        <>
            <h1 className="font-bold text-3xl mb-5 border-b-2 border-gray-300">Wizards Criadas</h1>
            <div className="flex items-center justify-center w-full grid lg:grid-cols-4 grid-cols-1">

                <WizardCard 
                    title="Titulo 1"
                    text="texto"
                    href="../"
                />

                <WizardCard 
                    title="Titulo 1"
                    text="texto"
                    href="../"
                />

                <WizardCard 
                    title="Titulo 1"
                    text="texto"
                    href="../"
                />
                
                <WizardCard 
                    title="Titulo 1"
                    text="texto"
                    href="../"
                />

            </div>
        </>
    );
}