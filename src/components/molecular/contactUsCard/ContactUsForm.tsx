'use client';
import Button from '@/components/atomic/button/Button';
import { Fade } from 'react-awesome-reveal';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
import https from 'https';

// Create an Axios instance that ignores SSL certificate errors
const axiosInstance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false, // Disable SSL certificate verification
    }),
});
type Props = {};

const ContactUsForm = (props: Props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const isFormValid = Object.entries(formData).every(([key, value]) => value.trim() !== '');

        if (!isFormValid) return;

        try {
            // Create an HTTPS agent that does not reject self-signed certificates
            const agent = new https.Agent({
                rejectUnauthorized: false, // Disable SSL certificate validation
            });

            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                console.log('Email sent successfully!');
                setFormData({ email: '', message: '', name: '', phone: '', subject: '' });
            } else {
                console.log('Failed to send email.');
            }
        } catch (error) {
            console.error('An error occurred while sending the email:', error);
        }
    };
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
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        className="bg-contactInputBg h-12 focus-visible:border-primary px-4 text-sm font-light"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="number"
                        className="bg-contactInputBg h-12 focus-visible:border-primary px-4 text-sm font-light"
                        style={{}}
                        placeholder="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        className="bg-contactInputBg h-12 focus-visible:border-primary px-4 text-sm font-light"
                        placeholder="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                    />
                    <textarea
                        rows={4}
                        className="col-span-2 bg-contactInputBg focus-visible:border-primary p-4 text-sm font-light"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                    />
                </div>
                <Button className="w-fit mt-4" onClick={handleSubmit}>
                    Submit Now
                </Button>
            </div>
        </div>
    );
};

export default ContactUsForm;
