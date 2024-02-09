'use client'
import { WizardCreate } from "../components/createWizard";
import React, { useState, useEffect } from 'react';




export default function Creator() {
    const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
      // Simula um carregamento assíncrono
      setTimeout(() => {
        setLoaded(true);
      }, 2000);
    }, []);

    return (
        <>
            <h1 className="font-bold text-3xl mb-5 border-b-2 border-gray-300">Criador de Wizards</h1>
            <div className="flex items-center justify-center flex-col w-full">
                {loaded ? (
                    <WizardCreate />
                ) : (
                    <div>Carregando...</div>
                )}
            </div>
            
        </>
    );
}
