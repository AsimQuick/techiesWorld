import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import * as Unicons from '@iconscout/react-unicons';

export default function Mission() {
    return (
        <>
<div className="container">
                                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 mt-8 lg:py-24 py-16">
                                <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 gap-2 mx-2 blog relative rounded-md shadow shadow-slate-200 dark:shadow-gray-800 bg-white opacity-95 overflow-hidden px-1">  
                                <div className="col-span-1 flex items-center justify-center pt-4">
                                    <Image src="/images/target2.png" alt="" width={0} height={0} sizes='100vw' style={{width:"5rem", height:"auto"}} />
                                </div>
                                
                                <div className="col-span-3">
                                    <div className="content p-6">
                                        <h3 className="text-slate-400 mt-3 text-xl font-bold">Mission</h3><br></br>
                                        <p className="text-slate-400 mt-3 text-left">Our mission is to bridge the gap between technological advancement and practical application by providing reliable, efficient and cost-effective solutions that catalyze organizational growth and societal progress.</p>
                                    </div>
                                </div>
                            </div>
                            
                             
                            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 gap-2 mx-2 blog relative rounded-md shadow shadow-slate-200 dark:shadow-gray-800 bg-white opacity-95 overflow-hidden px-1">  
                            <div className="col-span-1 flex items-center justify-center pt-4">
                                <Image src="/images/eye.png" alt="" width={0} height={0} sizes='100vw' style={{width:"5rem", height:"auto"}} />
                            </div>
                            
                            <div className="col-span-3">
                                <div className="content p-6">
                                    <h3 className="text-slate-400 mt-3 text-xl font-bold">Vision</h3><br></br>
                                    <p className="text-slate-400 mt-3 text-left">Our mission is to bridge the gap between technological advancement and practical application by providing reliable, efficient and cost-effective solutions that catalyze organizational growth and societal progress.</p>
                                </div>
                            </div>
                        </div>
            
                            </div>
                            </div>                    
    
        </>
    )
};