'use client';
import Button from '@/components/atomic/button/Button';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

type Props = {};

const ContactUsForm = (props: Props) => {
    return (
        <div className="w-full h-fit p-8 py-12 flex flex-col gap-4 bg-white text-black rounded-tr-lg rounded-br-[3rem]">
            <Fade triggerOnce>
                <div className="flex flex-col gap-2">
                    <h2 className="text-primary text-3xl font-bold">Enquiry Form</h2>
                    <p className="font-italianno text-lg">
                        Submit Your Inquiry: We{`'`}ll Get Back to You with the Information You
                        Need.
                    </p>
                </div>
            </Fade>
            <div className="flex flex-col">
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="text"
                        className="bg-contactInputBg h-12 focus-visible:border-primary px-4 text-sm font-light"
                        placeholder="Name"
                    />
                    <input
                        type="text"
                        className="bg-contactInputBg h-12 focus-visible:border-primary px-4 text-sm font-light"
                        placeholder="Email"
                    />
                    <input
                        type="number"
                        className="bg-contactInputBg h-12 focus-visible:border-primary px-4 text-sm font-light"
                        style={{}}
                        placeholder="Phone"
                    />
                    <input
                        type="text"
                        className="bg-contactInputBg h-12 focus-visible:border-primary px-4 text-sm font-light"
                        placeholder="Subject"
                    />
                    <textarea
                        rows={4}
                        className="col-span-2 bg-contactInputBg focus-visible:border-primary p-4 text-sm font-light"
                    />
                </div>
                <Button className="w-fit mt-4">Submit Now</Button>
            </div>
        </div>
    );
};

export default ContactUsForm;
