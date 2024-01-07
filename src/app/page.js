'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

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
                    <div className="grid grid-cols-1 pb-8 text-center mt-4">

                        <h3 className="font-medium leading-normal text-4xl mb-5 text-white font-lexend">Impowering Innovation</h3>
                        <p className="text-slate-400 text-lg max-w-xl mx-auto font-inter">Techies World is a dynamic technology solutions provider committed to delivering top-quality and services for technology needs. Our happy clients include
business, government agencies, and individuals with tech needs.</p>
                        <div className="mt-8">
                            <Link href="/contactus" className="py-2 px-5  font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md font-inter inline-flex items-center gap-1"><Unicons.UilEnvelope width={16}/> Contact Now</Link>
                        </div>
                    </div>

                    <h3 className="mb-4 md:text-2xl text-xl font-medium text-white text-center pt-4 font-lexend">Our Partners</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-2 mt-8 pb-0">
                            <img src="/images/logos/amazon-logo6.png" className="rounded-md shadow-lg" alt="" width={0} height={0} sizes='65px' style={{width:"70%", height:"auto"}} />
                            <img src="/images/logos/alibaba-logo3.png" className="rounded-md shadow-lg" alt="" width={0} height={0} sizes='65px' style={{width:"70%", height:"auto"}} />
                            <img src="/images/logos/vmware-logo2.png" className="rounded-md shadow-lg" alt="" width={0} height={0} sizes='65px' style={{width:"70%", height:"auto"}} />
                            <img src="/images/logos/vodacom-logo2.png" className="rounded-md shadow-lg" alt="" width={0} height={0} sizes='65px' style={{width:"70%", height:"auto"}} />
                            <img src="/images/logos/safaricom-logo2.png" className="rounded-md shadow-lg" alt="" width={0} height={0} sizes='65px' style={{width:"70%", height:"auto"}} />
                            <img src="/images/logos/rwandastandardsboard-logo2.png" className="rounded-md shadow-lg" alt="" width={0} height={0} sizes='65px' style={{width:"65%", height:"auto"}} />
                            <img src="/images/logos/oracle-logo2.png" className="rounded-md shadow-lg" alt="" width={0} height={0} sizes='65px' style={{width:"70%", height:"auto"}} />
                            <img src="/images/logos/mtn-logo3.png" className="rounded-md shadow-lg" alt="" width={0} height={0} sizes='65px' style={{width:"70%", height:"auto"}} />
                            <img src="/images/logos/microsoft-logo2.png" className="rounded-md shadow-lg" alt="" width={0} height={0} sizes='65px' style={{width:"70%", height:"auto"}} />
                            <img src="/images/logos/etisalat-logo5.png" className="rounded-md shadow-lg" alt="" width={0} height={0} sizes='65px' style={{width:"70%", height:"auto"}} />
                                </div>
                </div>
                </section>
                <div class="border-4 border-blue-900"></div>
                <div class="border-4 border-red-500"></div>
            <About />
            <OurServices title="Why Choose Us?" desc="We customize services from Information Technology to Engineering to meet our clients' specific needs. Our experienced professionals ensure top-quality service and excellent value for money."/>
            <section className="relative md:py-24 py-16 md:pt-0 pt-0 bg-gray-50 dark:bg-slate-800">
                <div className="container">
                    <div className="grid grid-cols-1 justify-center">
                        <div className="relative z-1">
                            <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                                <div className="lg:col-start-2 lg:col-span-10">
                                    <div className="relative">
                                        <Image src="/images/africa-technology1.jpg" className="rounded-md shadow-lg" alt="" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} />
                                        <div className="absolute bottom-2/4 translate-y-2/4 end-0 start-0 text-center">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-[30px] mt-8">
                                       
                                            <div className="mx-8 blog relative rounded-md shadow shadow-slate-200 dark:shadow-gray-800 bg-white opacity-95 overflow-hidden">
                                                <Image alt="" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} />
                    
                                                <div className="content p-6">
                                                    <p className="text-slate-400 mt-3 text-xl font-bold">Mission</p><br></br>
                                                    <p className="text-slate-400 mt-3">Our mission is to bridge the gap between technological advancement and practical application by providing reliable, efficient and cost-effective solutions that catalyze organizational growth and societal progress.</p>
                                                </div>
                                            </div>
                                            <div className="mx-8 blog relative rounded-md shadow shadow-slate-200 dark:shadow-gray-800 bg-white opacity-95 overflow-hidden">
                                            <Image alt="" width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} />
                
                                            <div className="content p-6">
                                                <p className="text-slate-400 mt-3 text-xl font-bold">Vision</p><br></br>
                                                <p className="text-slate-400 mt-3">Our vision is to be a global leader in technology solutions and educational services, fostering a community of empowered individuals and organizations that thrive in a digitally connected world.</p>
                                            </div>
                                        </div>
                    
                                    </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 end-0 start-0 h-4/5 md:h-2/3 bg-violet-600"></div>
            </section>
            <TechiesServices title="Services" desc="We specialize in a broad range of services to fulfil our clients' needs."/>
            <GetInTouch />
            <Footer />

        </>
    )
}
