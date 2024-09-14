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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [error, setError] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let firstError = '';

        // Check each field for validity and set the first error
        if (!formData.name.trim()) {
            firstError = 'Name is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            firstError = 'Invalid email address.';
        } else if (!/^\d{10}$/.test(formData.phone.trim())) {
            firstError = 'Phone number must be exactly 10 digits.';
        } else if (!formData.subject.trim()) {
            firstError = 'Subject is required.';
        } else if (!formData.message.trim()) {
            firstError = 'Message is required.';
        }

        setError(firstError);
        return !firstError; // Return false if there's an error
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!validateForm()) {
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await axiosInstance.post('/api/sendEmail', formData);

            if (response.data.success) {
                console.log('Email sent successfully!');
                setFormData({ email: '', message: '', name: '', phone: '', subject: '' });
                setError('');
            } else {
                console.log('Failed to send email.');
            }
        } catch (error) {
            console.error('An error occurred while sending the email:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full h-fit p-8 py-12 flex flex-col gap-4 bg-white text-secondary rounded-tr-lg rounded-br-[3rem]">
            <Fade triggerOnce>
                <div className="flex flex-col gap-2">
                    <h2 className="text-3xl font-bold text-secondary">Enquiry Form</h2>
                    <p className="font-italianno text-lg">
                        Submit Your Inquiry: We{`'`}ll Get Back to You with the Information You
                        Need.
                    </p>
                </div>
            </Fade>
            <div className="flex flex-col">
                <div className="grid grid-cols-2 gap-4">
                    {error && <div className="col-span-2 mb-4 text-red-500">{error}</div>}

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
                        placeholder="Message..."
                    />
                </div>
                <Button
                    className="w-fit mt-4"
                    onClick={handleSubmit}
                    type="secondary"
                    isSubmitting={isSubmitting}
                >
                    Submit Now
                </Button>
            </div>
        </div>
    );
};

export default ContactUsForm;
