'use client'
import React from 'react'
import Link from 'next/link';
import * as Unicons from '@iconscout/react-unicons';

export default function GetInTouch() {
    return (
        <>
            <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="contact">
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-4 md:text-2xl text-xl font-medium">Contact Us</h3>
                        <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">Interested in any of our services? Or any questions about the region? Please get in touch.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-[30px]">
                        <div className="lg:col-span-8">
                            <div className="p-6 rounded-md shadow bg-white dark:bg-slate-900">
                            <div className="container-fluid relative">
                <div className="grid grid-cols-1">
                    <div className="w-full leading-[0] border-0">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5501939993383!2d30.07231747583143!3d-1.93203623667462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6af74bbf11b%3A0xfa9ce3ab28bc335f!2s9%20KG%20507%20St%2C%20Kigali%2C%20Rwanda!5e0!3m2!1sen!2sae!4v1704561009899!5m2!1sen!2sae"
                            style={{ border: 0 }} className="w-full h-[500px]" title="contactUs" allowfullscreen> </iframe>

                    </div>
                </div>
            </div>
                            </div>
                        </div>

                        <div className="lg:col-span-4">
                            <div className="lg:ms-8">
                                <div className="flex">
                                    <div className="icons text-center mx-auto">
                                        <Unicons.UilPhone className=" block rounded text-2xl dark:text-white mb-0"/>
                                    </div>

                                    <div className="flex-1 ms-6">
                                        <h5 className="text-lg dark:text-white mb-2 font-medium">Phone</h5>
                                         <Link href="tel:+250787398769" className="text-slate-400">+250 787 398 769<br></br>+250 792 402 380</Link>
                                    </div>
                                </div>

                                <div className="flex mt-4">
                                    <div className="icons text-center mx-auto">
                                        <Unicons.UilEnvelope className=" block rounded text-2xl dark:text-white mb-0"/>
                                    </div>

                                    <div className="flex-1 ms-6">
                                        <h5 className="text-lg dark:text-white mb-2 font-medium">Email</h5>
                                         <Link href="mailto:info@techiesworld.com" className="text-slate-400">info@techiesworld.com</Link><br></br>
                                         <Link href="mailto:ceo@techiesworld.com" className="text-slate-400">ceo@techiesworld.com</Link><br></br>
                                         <Link href="mailto:md@techiesworld.com" className="text-slate-400">md@techiesworld.com</Link>
                                    </div>
                                </div>

                                <div className="flex mt-4">
                                    <div className="icons text-center mx-auto">
                                        <Unicons.UilMapMarker className=" block rounded text-2xl dark:text-white mb-0"/>
                                    </div>

                                    <div className="flex-1 ms-6">
                                        <h5 className="text-lg dark:text-white mb-2 font-medium">Location</h5>
                                        <p className="text-slate-400 mb-2">House No. 9, Street No. KG507, Kigali, Rwanda.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
