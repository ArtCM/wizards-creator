import Image from "next/image";
import Link from 'next/link'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Wizards Creator",
  description: "Crie suas wizards de forma dinâmica e prática",
};

export default function Home() {
  return (
    <>
      <h1 className="font-bold text-3xl text-center">Crie suas <span className="text-secondary">Wizards</span> de forma dinâmica</h1>
      <div className="flex flex-col lg:flex-row w-full mt-8 lg:mt-20">
        <div className="lg:basis-1/2 flex items-center order-2 lg:order-1 mt-8 lg:mt-2 justify-center">
          <Image src="/assets/images/Step.webp" width={500} height={500} alt="Step by Step" />
        </div> 
        <div className="lg:basis-1/2 flex flex-col order-1 lg:order-2 items-center justify-center lg:h-60">
          <Link href='/Creator' className='bg-primary hover:bg-secondary text-white font-bold py-2 px-4 my-2 w-64 rounded items-center justify-center flex'>Criar Wizards</Link>
          <Link href='/Wizards' className='bg-primary hover:bg-secondary text-white font-bold py-2 px-4 my-2 w-64 rounded items-center justify-center flex'>Wizards Criadas</Link>
        </div>
      </div>
    </>
  );
}
