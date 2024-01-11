'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Mission from './components/mission';

const NavbarSmallLight = dynamic(()=>import('./components/navbar-small-light'));
const Footer = dynamic(()=>import('./components/footer'));
const About = dynamic(()=>import('./components/about'));
const OurServices = dynamic(()=>import('./components/our-services'));

const BlogsNews = dynamic(()=>import('./components/blogs-news'));
const GetInTouch = dynamic(()=>import('./components/get-in-touch'));
const TechiesServices = dynamic(()=>import('./components/techiesServices'));
 
import * as Unicons from '@iconscout/react-unicons';

import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css";


export default function Index() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
        
            <NavbarSmallLight />
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <section className="py-36 lg:py-36 w-full table relative bg-[url('/images/techies-world-background2.jpg')] bg-bottom bg-no-repeat" id="home">
                <div className="absolute inset-0 bg-gradient-to-tl to-slate-950/50 via-slate-950/75 from-slate-950"></div>
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 pt-8 text-center mt-4">

                        <h3 className="font-medium leading-normal text-4xl mb-5 text-white font-lexend">Impowering Innovation</h3>
                        <p className="text-slate-400 text-lg max-w-xl mx-auto font-inter">Techies World is a dynamic technology solutions provider committed to delivering top-quality and services for technology needs. Our happy clients include
business, government agencies, and individuals with tech needs.</p>
                        <div className="mt-8">
                            <Link href="/contactus" className="py-2 px-5  font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md font-inter inline-flex items-center gap-1"><Unicons.UilEnvelope width={16}/> Contact Now</Link>
                        </div>
                    </div>

                    <h3 className="mb-4 md:text-2xl text-xl font-medium text-white text-center pt-16 font-lexend">Our Partners</h3>
                            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-0 mt-8 pb-0 ">
                            <img src="/images/logos/amazon-logo6.png" className="rounded-md shadow-lg" alt="" width={0} height={0} sizes='65px' style={{width:"8rem", height:"auto", opacity:"0.7"}} />
                            <img src="/images/logos/alibaba-logo3.png" className="rounded-md shadow-lg" alt="" width={0} height={0} sizes='65px' style={{width:"8rem", height:"auto", opacity:"0.7"}} />
                            <img src="/images/logos/vmware-logo2.png" className="rounded-md shadow-lg" alt="" width={0} height={0} sizes='65px' style={{width:"8rem", height:"auto", opacity:"0.7"}} />
                            <img src="/images/logos/vodacom-logo2.png" className="rounded-md shadow-lg" alt="" width={0} height={0} sizes='65px' style={{width:"8rem", height:"auto", opacity:"0.7"}} />
                            <img src="/images/logos/safaricom-logo2.png" className="rounded-md shadow-lg" alt="" width={0} height={0} sizes='65px' style={{width:"8rem", height:"auto", opacity:"0.7"}} />
                            <img src="/images/logos/rwandastandardsboard-logo2.png" className="rounded-md shadow-lg" alt="" width={0} height={0} sizes='65px' style={{width:"8rem", height:"auto", opacity:"0.7"}} />
                            <img src="/images/logos/oracle-logo2.png" className="rounded-md shadow-lg" alt="" width={0} height={0} sizes='65px' style={{width:"8rem", height:"auto", opacity:"0.7"}} />
                            <img src="/images/logos/mtn-logo3.png" className="rounded-md shadow-lg" alt="" width={0} height={0} sizes='65px' style={{width:"8rem", height:"auto", opacity:"0.7"}} />
                            <img src="/images/logos/microsoft-logo2.png" className="rounded-md shadow-lg" alt="" width={0} height={0} sizes='65px' style={{width:"8rem", height:"auto", opacity:"0.7"}} />
                            <img src="/images/logos/etisalat-logo5.png" className="rounded-md shadow-lg" alt="" width={0} height={0} sizes='65px' style={{width:"8rem", height:"auto", opacity:"0.7"}} />
                                </div>
                </div>
                </section>
                <div class="border-4 border-blue-900"></div>
                <div class="border-4 border-red-500"></div>
            <About />
            <OurServices title="Why Choose Us?" desc="We customize services from Information Technology to Engineering to meet our clients' specific needs. Our experienced professionals ensure top-quality service and excellent value for money."/>
            <Mission />
            <TechiesServices title="Services" desc="We specialize in a broad range of services to fulfil our clients' needs."/>
            <GetInTouch />
            <Footer />

        </>
    )
}
