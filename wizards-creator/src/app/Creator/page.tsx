'use client'

import React, { useState } from 'react';

export default function Creator() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [isRotated, setIsRotated] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsRotated(!isRotated);
    };

    return (
        <>
            <h1 className="font-bold text-3xl mb-5 border-b-2 border-gray-300">Criador de Wizards</h1>
            <div className="flex items-center justify-center flex-col w-full">
                <div className="absolute left-2 inset-y-28 h-100 flex items-center justify-center">
                    <div className={`bg-primary w-52 rounded-md transition-all duration-500 ${isMenuOpen ? '' : '-translate-x-56'}`}>
                        <div className="Input-types items-center justify-center grid grid-cols-2 p-2">
                            <div className="Input-type__item">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                </svg>
                                <p>Item</p>
                            </div>
                            <div className="Input-type__item">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                    </svg>
                                <p>Item</p>
                            </div>
                            <div className="Input-type__item">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                </svg>
                                <p>Item</p>
                            </div>
                            <div className="Input-type__item">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                </svg>
                                <p>Item</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={toggleMenu} type="button" className={`transform ${isRotated ? 'rotate-180 -translate-x-52' : ''} transition-all duration-500`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="gray" className="hover:stroke-secondary cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div> 
                <div className='border-b-2 border-gray-950 border-dashed my-6 py-1 flex items-center justify-center cursor-pointer'>
                    <p className=''>
                        Wizard Name
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </div>
                <div className='wizard-step bg-gray-300 p-4 rounded-lg w-4/6  flex flex-col items-center justify-center relative'>
                    <div className='absolute top-1 right-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" className='hover:stroke-red-600 cursor-pointer'>
                            <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <div className='wizard-step__name'>
                        <p>Wizard Step 1</p>
                    </div>
                    <div className='wizard-step__list w-full'>
                        <div className='wizard-step__list--input'>
                            <div className='absolute top-1 right-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" className='hover:stroke-red-600 cursor-pointer'>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                            <p>Wizard input</p>
                        </div>
                        <div className='wizard-step__list--input'>
                            <div className='absolute top-1 right-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" className='hover:stroke-red-600 cursor-pointer'>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                            <p>Wizard input</p>
                        </div>
                        <div className='wizard-step__list--input'>
                            <div className='absolute top-1 right-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" className='hover:stroke-red-600 cursor-pointer'>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                            <p>Wizard input</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={40} height={40} viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className='hover:stroke-secondary cursor-pointer mt-3'>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
            </div>
        </>
    );
}
