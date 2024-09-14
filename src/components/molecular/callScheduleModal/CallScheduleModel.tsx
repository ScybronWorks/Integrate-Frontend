'use client';
import { courseData } from '@/@db/course';
import Button from '@/components/atomic/button/Button';
import React, { ChangeEvent, useState } from 'react';
import { Bounce } from 'react-awesome-reveal';

type Props = {
    isOpen: boolean;
    handleClose: () => void;
};

const CallScheduleModal = ({ isOpen, handleClose }: Props) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        course: '',
        preferredTime: '',
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

        // Phone number validation
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(formData.phone.trim())) {
            if (!firstError) firstError = 'Phone number must be exactly 10 digits.';
            isValid = false;
        }

        // Course validation
        if (!formData.course.trim()) {
            if (!firstError) firstError = 'Course selection is required.';
            isValid = false;
        }

        // Preferred Time validation
        if (!formData.preferredTime.trim()) {
            if (!firstError) firstError = 'Preferred time is required.';
            isValid = false;
        }

        setErrors(firstError);
        return isValid;
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/scheduleCall', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (data.success) {
                console.log('Form submitted successfully!');
                setFormData({
                    name: '',
                    phone: '',
                    course: '',
                    preferredTime: '',
                });
                setErrors('');
            } else {
                console.log('Failed to submit form.');
            }
        } catch (error) {
            console.error('An error occurred while submitting the form:', error);
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
                                Schedule a Call
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
                                type="number"
                                className="bg-contactInputBg h-12 focus-visible:border-primary px-4 text-sm font-light"
                                placeholder="Phone"
                                name="phone"
                                value={formData.phone}
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
                                placeholder="Preferred Time"
                                name="preferredTime"
                                value={formData.preferredTime}
                                onChange={handleInputChange}
                            />
                        </div>
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

export default CallScheduleModal;
