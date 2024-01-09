'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Navbar = dynamic(()=>import('../components/navbar'));

const Footer = dynamic(()=>import('../components/footer'));
const OurServices = dynamic(()=>import('../components/our-services'));
const MeetOurs = dynamic(()=>import('../components/meet-ours'));
const About2 = dynamic(()=>import('../components/about2'));
import * as Unicons from '@iconscout/react-unicons';

export default function AboutUs() {
    return (
        <>
            <body className="font-inter text-base text-slate-950 dark:text-white dark:bg-slate-900">
                <Navbar />
                <section className="py-28 w-full table relative bg-[url('/images/techies-world-bg3.jpg')] bg-bottom bg-no-repeat"
                    id="home">
                    <div className="absolute inset-0 "></div>

                    <div className="container">
                        <div className="grid grid-cols-1 pb-8 text-center mt-10">
                            <h3 className="font-medium leading-normal text-3xl mt-10 text-white font-lexend">About Us</h3>
                        </div>
                    </div>
                </section>
                <section className="relative md:pb-24 pb-16" id="about">
                    <About2 />
                    <OurServices title="Why Choose Us?" desc="We customize services from Information Technology to Engineering to meet our clients' specific needs. Our experienced professionals ensure top-quality service and excellent value for money."/>
                    <MeetOurs />
                    <div className="container lg:mt-24 mt-16">
                        <div className="grid grid-cols-1 text-center">
                            <h3 className="mb-6 md:text-2xl text-xl font-medium font-lexend">Have Question? Get in touch!</h3>

                            <p className="text-slate-400 max-w-xl mx-auto">We love to hear more from you.</p>

                            <div className="mt-6">
                                 <Link href="/contactus" className="py-2 px-5  font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md inline-flex items-center gap-1"><Unicons.UilPhone width={16}/> Contact us</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </body>
        </>
    )
}

