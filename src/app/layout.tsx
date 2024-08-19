import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import './globals.css';
import Footer from '@/components/layout/footer/Footer';
import Navbar from '@/components/layout/navbar/Navbar';

const lexend = Lexend({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'INTEGRATE EDUTECH PVT. LTD.',
    description:
        'THE FIRM AIMS TO PROVIDE QUALITY EDUCATION FOR STUDENTS WHO ARE THRIVING TO ACHIEVE THEIR MAXIMUM FOR DIFFERENT SUBJECTS IN HIGH SCHOOL, HIGHER SECONDARY AND FOR COMPETITIVE EXAMINATIONS. WE ARE DEDICATED IN PROVIDING ONLINE AS WELL AS OFFLINE CLASS FOR VARIOUS PRIME SUBJECTS SUCH AS CHEMISTRY, PHYSICS, MATHEMATICS AND OTHER; FOR BOTH SCHOOL LEVEL AND CAREER ORIENTED COMPETITIVE LEVEL EXAMINATIONS SUCH AS JEE, NEET, KEAM ETC. THE CLASSES COMES WITH EXPERT TEACHING FACULTIES AND SUPPLIMENTARY MENTOR SUPPORT. WE PROVIDE PROPER MODEL EXAMINATIONS OF EACH SUBJECT WITH WEEKLY ANALYSIS FOR EACH STUDENT AND INITIATE CORRECTION PROCEDURES. OUR COURSES AT EACH LEVEL OF STUDIES ARE ORIENTED TO FACILITATE EASY AND COMFORTABLE STUDY PATTERNS FOR STUDENTS, FEELING STRESS FREE.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={lexend.className}>
                <Navbar />
                <div className="min-h-[100vh]">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
