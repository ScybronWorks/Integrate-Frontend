'use client';
import { courseData } from '@/@db/course';
import Button from '@/components/atomic/button/Button';
import React, { ChangeEvent, useState } from 'react';
import { Bounce, Zoom } from 'react-awesome-reveal';
import axios from 'axios';
import https from 'https';
type Props = {
    isOpen: boolean;
    handleClose: () => void;
};

const DemoModal = ({ isOpen, handleClose }: Props) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        course: '',
        phone: '',
        subject: '',
        message: '',
    });
    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async () => {
        setIsSubmitting(true);
        console.log(formData);
        const isFormValid = Object.entries(formData).every(([key, value]) => value.trim() !== '');
        console.log(isFormValid);
        if (!isFormValid) return;

        try {
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
                setFormData({
                    email: '',
                    message: '',
                    name: '',
                    phone: '',
                    subject: '',
                    course: '',
                });
            } else {
                console.log('Failed to send email.');
            }
        } catch (error) {
            console.error('An error occurred while sending the email:', error);
        } finally {
            setIsSubmitting(false);
        }
        handleClose();
    };
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
            <Bounce duration={700} triggerOnce>
                <div className="bg-white w-fit h-fit p-8 relative rounded-md shadow-lg">
                    <h2
                        className="text-2xl font-bold text-end text-gray-700 cursor-pointer"
                        onClick={handleClose}
                    >
                        X
                    </h2>
                    <div className="flex flex-col">
                        <div className="grid grid-cols-2 gap-4">
                            <h2 className="text-2xl font-bold text-start text-primary col-span-2">
                                Get a demo
                            </h2>

                            <input
                                type="text"
                                className="bg-contactInputBg h-12 focus-visible:border-primary px-4 text-sm font-light"
                                placeholder="Name"
                                name="name"
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                className="bg-contactInputBg h-12 focus-visible:border-primary px-4 text-sm font-light"
                                placeholder="Email"
                                name="email"
                                onChange={handleInputChange}
                            />

                            <select
                                className="w-full col-span-2 px-2 bg-contactInputBg h-12 focus-visible:border-primary font-light"
                                name="course"
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Select course</option>
                                {courseData.map((data, i) => (
                                    <option key={i} value={data.title} className="font-light">
                                        {data.title}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="number"
                                className="bg-contactInputBg h-12 focus-visible:border-primary px-4 text-sm font-light"
                                placeholder="Phone"
                                name="phone"
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                className="bg-contactInputBg h-12 focus-visible:border-primary px-4 text-sm font-light"
                                placeholder="Subject"
                                name="subject"
                                onChange={handleInputChange}
                            />
                            <textarea
                                rows={4}
                                className="col-span-2 bg-contactInputBg focus-visible:border-primary p-4 text-sm font-light"
                                name="message"
                                placeholder="Message..."
                                onChange={handleInputChange}
                            />
                        </div>
                        <Button
                            className="w-fit mt-4"
                            onClick={() => handleSubmit()}
                            isLightBg
                            isSubmitting={isSubmitting}
                        >
                            Submit Now
                        </Button>
                    </div>
                </div>
            </Bounce>
        </div>
    );
};

export default DemoModal;
