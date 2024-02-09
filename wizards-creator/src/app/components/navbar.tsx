'use client'
 
import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return(
        <>
            <nav className='bg-primary flex items-center justify-between px-5 py-1'>
                <div>
                    <Link className='flex items-center justify-center' href="/">
                        <Image src="/assets/images/wizard.webp" alt="Wizards Creator Logo" width={100} height={100} />
                        <p className='text-white'><strong>Wizards Creator</strong></p>
                    </Link>
                </div>

                {/* NavButton Mobile */}
                <div className='lg:hidden'>
                    <button onClick={toggleMenu} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                
                {/* Menu Desktop */}
                <ul className='flex hidden lg:flex'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/Creator">Criar Wizard</Link></li>
                    <li><Link href="/Wizards">Wizards Criadas</Link></li>
                </ul>
            </nav>

            {/* Menu Mobile */}
            <div className={`lg:hidden ${isMenuOpen ? '' : 'hidden'}`} id="mobile-nav">
                <div className="space-y-1 px-2 pb-3 pt-2 bg-slate-700 z-[100] absolute w-full shadow-xl">
                    <Link href="/">Dashboard</Link>
                    <Link href="/Creator">Criar Wizard</Link>
                    <Link href="/Wizards">Wizards Criadas</Link>
                </div>
            </div>
        </>
    )
}
