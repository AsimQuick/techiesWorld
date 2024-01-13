'use client'
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

import * as Unicons from '@iconscout/react-unicons';

export default function Footer() {

    return (
        <>
            <footer className="footer bg-slate-950 relative text-gray-200 dark:text-gray-200">
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="py-[60px] px-0">
                                <div className="grid grid-cols-1">
                                    <div className="text-center">
                                        <Image src="/images/techies-world-logo-white.png" className="block mx-auto" alt="" width={64} height={64} />
                                        <p className="max-w-xl mx-auto text-slate-400 mt-8">Techies World guarantees the highest quality of goods and services, transparency, and ethical practices to our clients and partners.
                                        </p>
                                    </div>

                                    <ul className="list-none footer-list text-center mt-8">
                                        <li className="inline px-2"> <Link href="/services"
                                            className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out">Services</Link>
                                        </li>
                                        <li className="inline px-2 mt-[10px]"> <Link href="/aboutus"
                                            className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out ms-2">About
                                            Us</Link></li>
                                        
                                        <li className="inline px-2 mt-[10px]"> <Link href="/team"
                                            className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out ms-2">Team</Link>
                                        </li>
                                        <li className="inline px-2 mt-[10px]"> <Link href="/contactus"
                                            className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out ms-2">Contact
                                            Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-[30px] px-0 border-t border-slate-800">
                    <div className="container text-center">
                        <div className="grid md:grid-cols-12 items-center">
                            <div className="md:col-span-6">
                                <div className="md:text-start text-center">
                                    <p className="text-gray-400 text-center">©
                                        {new Date().getFullYear()} TechiesWorld.net
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
