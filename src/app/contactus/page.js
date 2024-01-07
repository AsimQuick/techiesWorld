'use client'
import React, { useState } from 'react'
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Navbar = dynamic(()=>import('../components/navbar'));
const Footer = dynamic(()=>import('../components/footer'));
const ContactData = dynamic(()=>import('../components/contact-data'));

export default function ContactUs() {
    return (
        <>
            <Navbar />
            <section className="py-28 w-full table relative bg-[url('/images/green-leaf.jpg')] bg-bottom bg-no-repeat" id="home">
                <div className="absolute inset-0"></div>

                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="font-medium leading-normal text-3xl mt-10 text-white font-lexend">Contact Us</h3>
                    </div>
                </div>
            </section>
            <section className="relative lg:py-24 py-16">
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-top gap-[30px]">
                        <div className="lg:col-span-7 md:col-span-6">
                            <Image src="/images/green-leaf.jpg" alt="" width={0} height={0} sizes="100vw" style={{width:"auto", height:"100%"}}/>
                        </div>

                        <div className="lg:col-span-5 md:col-span-6">
                            <div className="lg:ms-5">
                                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
                                    <h3 className="mb-6 text-2xl leading-normal font-medium font-lexend">Get in touch !</h3>

                                    <form method="post" name="myForm" id="myForm" onsubmit="return validateForm()">
                                        <p className="mb-0" id="error-msg"></p>
                                        <div id="simple-msg"></div>
                                        <div className="grid lg:grid-cols-12 lg:gap-6">
                                            <div className="lg:col-span-6 mb-5">
                                                <label htmlFor="name" className="form-label font-medium">Your Name:</label>
                                                <input name="name" id="name" type="text" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2" placeholder="Name :" />
                                            </div>

                                            <div className="lg:col-span-6 mb-5">
                                                <label htmlFor="email" className="form-label font-medium">Your Email:</label>
                                                <input name="email" id="email" type="email" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2" placeholder="Email :" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1">
                                            <div className="mb-5">
                                                <label htmlFor="subject" className="form-label font-medium">Your Question:</label>
                                                <input name="subject" id="subject" className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2" placeholder="Subject :" />
                                            </div>

                                            <div className="mb-5">
                                                <label htmlFor="comments" className="form-label font-medium">Your Comment:</label>
                                                <textarea name="comments" id="comments" className="form-input w-full py-2 px-3 bg-transparent border border-inherit dark:border-gray-800 dark:bg-slate-900 dark:text-slate-200 rounded outline-none focus:border-violet-600/50 dark:focus:border-violet-600/50 focus:ring-0 mt-2 textarea h-28" placeholder="Message :"></textarea>
                                            </div>
                                        </div>
                                        <button type="submit" id="submit" name="send" className="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md">Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ContactData />
            </section>
            <div className="container-fluid relative">
                <div className="grid grid-cols-1">
                    <div className="w-full leading-[0] border-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5501939993383!2d30.07231747583143!3d-1.93203623667462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6af74bbf11b%3A0xfa9ce3ab28bc335f!2s9%20KG%20507%20St%2C%20Kigali%2C%20Rwanda!5e0!3m2!1sen!2sae!4v1704561009899!5m2!1sen!2sae"
                            style={{ border: 0 }} className="w-full h-[500px]" title="contactUs" allowfullscreen> </iframe>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}