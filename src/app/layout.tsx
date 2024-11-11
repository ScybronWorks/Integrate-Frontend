import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import './globals.css';
import Footer from '@/components/layout/footer/Footer';
import Navbar from '@/components/layout/navbar/Navbar';
import { useEffect, useState } from 'react';
import Loading from '@/components/layout/loading/Loading';

const lexend = Lexend({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'INTEGRATE EDUTECH PVT. LTD.',
    description:
        'THE FIRM AIMS TO PROVIDE QUALITY EDUCATION FOR STUDENTS WHO ARE THRIVING TO ACHIEVE THEIR MAXIMUM FOR DIFFERENT SUBJECTS IN HIGH SCHOOL, HIGHER SECONDARY AND FOR COMPETITIVE EXAMINATIONS. WE ARE DEDICATED IN PROVIDING ONLINE AS WELL AS OFFLINE CLASS FOR VARIOUS PRIME SUBJECTS SUCH AS CHEMISTRY, PHYSICS, MATHEMATICS AND OTHER; FOR BOTH SCHOOL LEVEL AND CAREER ORIENTED COMPETITIVE LEVEL EXAMINATIONS SUCH AS JEE, NEET, KEAM ETC. THE CLASSES COMES WITH EXPERT TEACHING FACULTIES AND SUPPLIMENTARY MENTOR SUPPORT. WE PROVIDE PROPER MODEL EXAMINATIONS OF EACH SUBJECT WITH WEEKLY ANALYSIS FOR EACH STUDENT AND INITIATE CORRECTION PROCEDURES. OUR COURSES AT EACH LEVEL OF STUDIES ARE ORIENTED TO FACILITATE EASY AND COMFORTABLE STUDY PATTERNS FOR STUDENTS, FEELING STRESS FREE.',
};

export default function RootLayout({
    children,
    //test
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
             <head>
                <meta property="og:title" content="Integrate Edutech" />
                <meta
                    property="og:description"
                    content="Integrate Edutech empowers students by providing quality education through online and offline classes. We specialize in subjects like chemistry, physics, and mathematics, with expert faculty and personalized mentor support to help students achieve their academic potential."
                />
                <meta property="og:image" content="https://integrateedu.co.in/img/home/boy.png" />
                <meta property="og:url" content="https://integrateedu.co.in/" />
                <meta property="og:type" content="website" />

                <meta name="title" content="Integrate Edutech" />
                <meta
                    name="description"
                    content="Integrate Edutech offers quality education for high school and higher secondary students. Our online and offline classes cover key subjects like chemistry, physics, and mathematics, with expert teaching and personalized mentor support."
                />
                <meta
                    name="keywords"
                    content="Integrate Edutech, quality education, online classes, offline classes, high school education, higher secondary education, chemistry, physics, mathematics, expert teaching, mentor support, academic excellence"
                />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <link href="https://integrateedu.co.in/img/logo/logo.ico" rel="icon" />
                <link href="https://integrateedu.co.in/img/logo/logo.ico" rel="apple-touch-icon" />
            </head>
            <body className={`${lexend.className} overflow-x-hidden`}>
                <Loading>
                    <Navbar />
                    <div className="min-h-[100vh] overflow-x-hidden">{children}</div>
                    <Footer />
                </Loading>
            </body>
        </html>
    );
}
