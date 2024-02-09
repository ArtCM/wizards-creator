"use client"
import { useSaveWizardsStore } from '@/store/wizardStore';
import WizardCard from '../components/WizardCard';
import React from 'react';


export default function WizardsView() {
    const { listWizardSaves } = useSaveWizardsStore();
    return (
        <>
            <h1 className="font-bold text-3xl mb-5 border-b-2 border-gray-300">Wizards Criadas</h1>
            { listWizardSaves.length===0 ? <div className="flex itens-center justify-center w-full"><p className="font-bold text-center">Nenhuma Wizard Criada</p></div> :  
            listWizardSaves.map((item, index) => (
                <div key={index}>
                    <div className="items-center justify-center w-full grid lg:grid-cols-4 grid-cols-1">
                    <WizardCard
                        title={item.listPageWizard[index].name}
                        text={item.listPageWizard[index].stepItems.title}
                        href={`Wizards/${listWizardSaves.length-1}`}
                    />
                    </div>
                </div>
            ) )}
        </>
    );
}