'use client';
import { courseData } from '@/@db/course';
import Button from '@/components/atomic/button/Button';
import React, { ChangeEvent, useState } from 'react';
import { Bounce } from 'react-awesome-reveal';
import { useRaf } from 'react-use';

type Props = {
    isOpen: boolean;
    handleClose: () => void;
};

const DemoModal = ({ isOpen, handleClose }: Props) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRaf();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        course: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState<string>('');

    const validateForm = () => {
        let isValid = true;
        let firstError = '';

        // Reset errors
        firstError = '';

        // Name validation
        if (!formData.name.trim()) {
            firstError = 'Name is required.';
            isValid = false;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email.trim())) {
            if (!firstError) firstError = 'Invalid email address.';
            isValid = false;
        }

        // Phone number validation
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(formData.phone.trim())) {
            if (!firstError) firstError = 'Phone number must be exactly 10 digits.';
            isValid = false;
        }

        // Subject validation
        if (!formData.subject.trim()) {
            if (!firstError) firstError = 'Subject is required.';
            isValid = false;
        }

        // Message validation
        if (!formData.message.trim()) {
            if (!firstError) firstError = 'Message is required.';
            isValid = false;
        }

        setErrors(firstError);
        return isValid;
    };

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;

        setIsSubmitting(true);
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
                setErrors('');
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
                        <form className="grid grid-cols-2 gap-4">
                            <h2 className="text-2xl font-bold text-start text-primary col-span-2">
                                Get a demo
                            </h2>

                            {errors && <div className="col-span-2 mb-4 text-red-500">{errors}</div>}

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

                            <select
                                className="w-full col-span-2 px-2 bg-contactInputBg h-12 focus-visible:border-primary font-light"
                                name="course"
                                value={formData.course}
                                onChange={handleInputChange}
                            >
                                <option value="">Select course</option>
                                {courseData.map((data, i) => (
                                    <option key={i} value={data.title} className="font-light">
                                        {data.title}
                                    </option>
                                ))}
                            </select>

                            <input
                                type="text"
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
                                placeholder="Message..."
                                value={formData.message}
                                onChange={handleInputChange}
                            />
                        </form>
                        <Button
                            className="w-fit mt-4"
                            onClick={handleSubmit}
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
