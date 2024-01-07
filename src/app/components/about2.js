'use client'
import React from 'react'
import Image from 'next/image';

import * as Unicons from '@iconscout/react-unicons';

export default function About2() {
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
                                <h3 className="mb-4 md:text-2xl text-xl font-medium font-lexend">About Us: Techies World</h3>

                                <p className="text-slate-400 dark:text-slate-300 max-w-2xl font-inter mx-auto">Founded with a vision to transform the technological landscape, our company provides an extensive array of services meticulously crafted to address the varied needs of our clients. Our overarching mission is to harness technology for societal progress, security enhancement, and the advancement of skills, thereby fostering growth and prosperity within our communities. Fueled by a genuine passion for innovation and an unwavering commitment to excellence, Techies World stands as your reliable partner in technology. We deliver services tailored to meet your specific technical requirements, ensuring a trusted and proficient collaboration.</p>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};