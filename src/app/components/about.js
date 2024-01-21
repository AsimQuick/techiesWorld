'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import * as Unicons from '@iconscout/react-unicons';

export default function About() {
    return (
        <>
            <section className="relative md:py-24 py-16" id="about">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
                        <div className="lg:col-span-5">
                            <div className="relative">
                                <Image src="/images/kigali.jpg" className="rounded-lg shadow-lg relative" alt="" width={0} height={0} sizes='100vw' style={{height:"auto", width:"100%"}}/>
                                <div className="absolute bottom-2/4 translate-y-2/4 end-0 start-0 text-center">
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-7">
                            <div className="lg:ms-7">
                                <h3 className="mb-4 md:text-2xl text-xl font-medium font-lexend">Overview</h3>

                                <p className="text-slate-400 dark:text-slate-300 max-w-2xl font-inter mx-auto">Techies World is a dynamic and forward-thinking technology company committed to empowering businesses, corporate institutions and individuals with unique technological advancements. We offer a wide range of services designed to meet the diverse needs of our clients. Our mission is to leverage technology and improve skill development contributing to the growth and prosperity of our communities.<br></br><br></br>
                                Our services are tailored to meet the specific needs of our clients and include everything from Information Technology to quality management and assurance. We have a team of experienced professionals who ensure that our clients receive the highest quality service and the best value for money.<br></br></p>

                            </div>
                        </div>


                        <div className="lg:col-span-7">
                        <div className="lg:mr-7">
                            <p className="text-slate-400 dark:text-slate-300 max-w-2xl font-inter mx-auto">Our operations are in both Rwanda and South Sudan. Our Juba Branch is actively engaged in supporting UN missions and NGOs and we are collaborating with local NGOs and Security Companies with teams on the ground in almost all of the provinces of South Sudan.<br></br></p>

                        </div>
                    </div>

                    <div className="lg:col-span-5">
                    <div className="relative">
                        <Image src="/images/juba-city.jpg" className="rounded-lg shadow-lg relative" alt="" width={0} height={0} sizes='100vw' style={{height:"auto", width:"100%"}}/>
                        <div className="absolute bottom-2/4 translate-y-2/4 end-0 start-0 text-center">
                        </div>
                    </div>
                </div>

                    </div>
                </div>
            </section>
        </>
    )
};