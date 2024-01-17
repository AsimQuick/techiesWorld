/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import * as Unicons from '@iconscout/react-unicons';

export default function Partners() {
    return (
      <section className="bg-blue-900 py-16">
      <h3 className="mb-4 md:text-2xl text-xl font-medium text-white text-center font-lexend">Our Partners</h3>
      <div className="container grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-8 mx-auto">
      <img src="/images/logos/amazon-logo6.png" className="rounded-md" alt="" width={0} height={0} sizes='65px' style={{width:"8rem", height:"auto", opacity:"0.7"}} />
      <img src="/images/logos/alibaba-logo3.png" className="rounded-md" alt="" width={0} height={0} sizes='65px' style={{width:"8rem", height:"auto", opacity:"0.7"}} />
      <img src="/images/logos/vmware-logo2.png" className="rounded-md" alt="" width={0} height={0} sizes='65px' style={{width:"8rem", height:"auto", opacity:"0.7"}} />
      <img src="/images/logos/vodacom-logo2.png" className="rounded-md" alt="" width={0} height={0} sizes='65px' style={{width:"8rem", height:"auto", opacity:"0.7"}} />
      <img src="/images/logos/safaricom-logo2.png" className="rounded-md" alt="" width={0} height={0} sizes='65px' style={{width:"8rem", height:"auto", opacity:"0.7"}} />
      <img src="/images/logos/rwandastandardsboard-logo2.png" className="rounded-md" alt="" width={0} height={0} sizes='65px' style={{width:"8rem", height:"auto", opacity:"0.7"}} />
      <img src="/images/logos/oracle-logo2.png" className="rounded-md" alt="" width={0} height={0} sizes='65px' style={{width:"8rem", height:"auto", opacity:"0.7"}} />
      <img src="/images/logos/mtn-logo3.png" className="rounded-md" alt="" width={0} height={0} sizes='65px' style={{width:"8rem", height:"auto", opacity:"0.7"}} />
      <img src="/images/logos/microsoft-logo2.png" className="rounded-md" alt="" width={0} height={0} sizes='65px' style={{width:"8rem", height:"auto", opacity:"0.7"}} />
      <img src="/images/logos/etisalat-logo5.png" className="rounded-md" alt="" width={0} height={0} sizes='65px' style={{width:"8rem", height:"auto", opacity:"0.7"}} />
          
      </div>
      </section>
    )
};