/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { Link as Link1 } from 'react-scroll';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Mission from './components/mission';
import Organogram from './components/organogram';
import Partners from './components/partners';

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
            <video loop autoPlay muted className="absolute inset-0 w-full h-full object-cover">
            <source src="/images/kigali-south-sudan-technology-services-standards.mp4" type="video/mp4" />
            </video>    
            <div className="absolute inset-0 bg-gradient-to-tl to-slate-950/25 via-slate-950/45 from-slate-950"></div>

                <div className="container">
                    <div className="grid grid-cols-1 pb-8 pt-8 text-center mt-4">

                        <h3 className="font-medium leading-normal text-4xl mb-5 text-white font-lexend">Impowering Innovation</h3>
                        <p className="text-slate-400 text-lg max-w-xl mx-auto font-inter">Techies World is a dynamic technology solutions provider committed to delivering top-quality and services for technology needs. Our happy clients include
business, government agencies, and individuals with tech needs.</p>
                        <div className="mt-8">
                            <Link1 to="contact" className="py-2 px-5  font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md font-inter inline-flex items-center gap-1"><Unicons.UilEnvelope width={16}/> Contact Now</Link1>
                        </div>
                    </div>
                </div>
                </section>
                <div class="border-4 border-blue-900"></div>
                <div class="border-4 border-red-500"></div>
            <About />
            <OurServices title="Why Choose Us?" desc="We customize services from Information Technology to Engineering to meet our clients' specific needs. Our experienced professionals ensure top-quality service and excellent value for money."/>
            <Organogram />
            <Mission />
            <TechiesServices title="Services" desc="We specialize in a broad range of services to fulfil our clients' needs."/>
            <GetInTouch />
            <Partners />
            <Footer />

        </>
    )
}
