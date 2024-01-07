'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Navbar = dynamic(()=>import('../../components/navbar'))
const Footer = dynamic(()=>import('../../components/footer'));

import * as Unicons from '@iconscout/react-unicons';
import { Servicesdata } from '../../Data/data';

export default function ServicesDetails (props) {
    const serviceNumber = Servicesdata.find((serviceItem) => serviceItem?.id === parseInt(props?.params?.id || 0));
    const imageNeeded = serviceNumber?.image;
    
    return (
        <>
            <Navbar />
            <section className="py-28 w-full table relative bg-no-repeat" 
            style={{ 
                backgroundImage: `url(${serviceNumber?.image})`,
              }}id="home">
                <div className="absolute inset-0 bg-slate-950/40"></div>

                <div className="container">
                    <div className="grid grid-cols-1 pb-2 text-center mt-10">
                        <h3 className="mb-1 font-medium leading-normal text-3xl mt-10 text-white">{serviceNumber?.title}</h3>
                    </div>
                       </div>
            </section>
            <div class="border-4 border-blue-900"></div>
                <div class="border-4 border-red-500"></div>
            <section className="relative md:py-6 py-16">
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-6 md:col-span-6">
                            <div className="p-6 rounded-md shadow dark:shadow-gray-800">

                                <Image src={serviceNumber?.image} className="rounded-md" alt="" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}}/>

                                <div className="mt-6">
                                    <p className="text-slate-400 italic border-x-4 border-violet-600 rounded-ss-xl rounded-ee-xl mt-3 p-3">&quot; {serviceNumber?.descriptionhighlight} &quot;</p>
                                </div>
                            </div>

                            
                        </div>

                        <div className="lg:col-span-6 md:col-span-6">
                            <div className="p-6 rounded-md shadow dark:shadow-gray-800">


                                <div className="">
                                    <p className="text-slate-400">{serviceNumber?.description}</p>
                                
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>
                                <div className="container p-12">
                    <div className="grid grid-cols-1 text-center">
                        <h3 className="mb-6 md:text-2xl text-xl font-medium">Have Question ? Get in touch!</h3>

                        <p className="text-slate-400 max-w-xl mx-auto">We'd love to hear from you.</p>

                        <div className="mt-6">
                             <Link href="/contactus" className="py-2 px-5  font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md inline-flex items-center gap-1"><Unicons.UilPhone width={16}/> Contact us</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}
