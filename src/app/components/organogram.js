import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import * as Unicons from '@iconscout/react-unicons';

export default function Organogram() {
    return (
        <section className="relative py-16">
            <div className="container md:px-64">
            <h3 className="mb-4 md:text-2xl text-xl text-center font-medium font-lexend pb-8">Organizational Structure</h3>
            <Image src="/images/techies-organogram3.png" className="lg-px-16 px-2 relative" alt="" width={0} height={0} sizes='100vw' style={{height:"auto", width:"100%"}}/>
            </div>
            </section>
    )
};