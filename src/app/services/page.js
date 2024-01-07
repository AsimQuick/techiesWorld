'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Navbar = dynamic(()=>import('../components/navbar'));
const Switcher = dynamic(()=>import('../components/Switcher'));
const Footer = dynamic(()=>import('../components/footer'));
const ClientReview2 = dynamic (()=>import('../components/clientReview2'));
const OurServices = dynamic(()=>import('../components/our-services'));
import * as Unicons from '@iconscout/react-unicons';
import TechiesServices from '../components/techiesServices';
export default function Services() {
    return (
        <>
            <Navbar />
            <section className="py-28 w-full table relative bg-[url('/images/techies-world-bg4.jpg')] bg-bottom bg-no-repeat" id="home">
                <div className="absolute inset-0"></div>

                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="font-medium leading-normal text-3xl mt-10 text-white font-lexend">Our Services</h3>
                    </div>
                </div>
            </section>
            <section >
                <TechiesServices title="Our Services" desc="We specialize in a broad range of services to fulfil our clients' needs.

"/>
            </section>


            <Footer />
        </>
    )
}
