import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import * as Unicons from '@iconscout/react-unicons';

export default function Mission() {
    return (
        <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="features">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 mx-auto">
        <div className="col-span-2 mx-auto pb-4">
        <h3 className="mb-4 md:text-2xl text-xl font-medium font-lexend text-center">About Us</h3>
        <p className="text-slate-400 dark:text-slate-400 font-inter text-center mx-auto">Techies World is a dynamic and forward-thinking technology company committed to empowering businesses, corporate institutions and individuals with unique technological advancements. We offer a wide range of services designed to meet the diverse needs of our clients. Our mission is to leverage technology and improve skill development contributing to the growth and prosperity of our communities.
        <br></br><br></br>Our services are tailored to meet the specific needs of our clients and include everything from Information Technology to quality management and assurance. We have a team of experienced professionals who ensure that our clients receive the highest quality service and the best value for money.
        </p>
        
        </div>
        
        <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center rounded-md py-4 px-1 md:px-8 lg:px-16">
        <Image src="/images/target2.png" alt="" width={0} height={0} sizes='100vw' style={{width:"5rem", height:"auto"}} />
        <h3 className="text-slate-400 mt-3 text-xl font-bold">Mission</h3><br></br>
        <p className="text-slate-400 mt-3 text-center">Our mission is to bridge the gap between technological advancement and practical application by providing reliable, efficient and cost-effective solutions that catalyze organizational growth and societal progress.</p>
                                    
        </div>

        <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center rounded-md py-4 px-1 md:px-8 lg:px-16">
        <Image src="/images/eye.png" alt="" width={0} height={0} sizes='100vw' style={{width:"5rem", height:"auto"}} />
        <h3 className="text-slate-400 mt-3 text-xl font-bold">Vision</h3><br></br>
        <p className="text-slate-400 mt-3 text-center">Our vision is to be a global leader in technology solutions and educational services, fostering a community of empowered individuals and organizations that thrive in a digitally connected world.</p>
                                    
        </div>
        </div>
        </section>
    )
};