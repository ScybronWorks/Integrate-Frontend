import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface EmailData {
    preferredTime: string;
    phone: string;
    name: string;
    course: string;
}

export async function POST(req: Request) {
    try {
        const { phone, name, course, preferredTime }: EmailData = await req.json();
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_TO_EMAIL,
            subject: `New Call Scheduled: ${name} is Ready to Connect!`,
            html: createEmailTemplate({ phone, name, course, preferredTime }),
        };

        // Send mail with defined transport object
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { success: false, error: (error as Error).message },
            { status: 500 }
        );
    }
}

function createEmailTemplate({ phone, name, course, preferredTime }: EmailData) {
    return `
    <!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Call Scheduled</title>
        <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
            rel="stylesheet"
        />
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .email-container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 10px;
                overflow: hidden;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            .email-header,
            .email-footer {
                background-color: #003366;
                color: #ffffff;
                text-align: center;
                padding: 20px;
            }
            .email-header img,
            .email-footer img {
                max-width: 150px;
                height: auto;
            }
            .email-body {
                background-color: #f6b662;
                padding: 30px;
                text-align: center;
            }
            .email-body h1 {
                color: #003366;
                font-size: 24px;
                margin-bottom: 10px;
            }
            .email-body p {
                color: #333333;
                font-size: 16px;
                margin: 20px 0;
            }
            .email-body .user-details {
                background-color: #f4f4f4;
                padding: 20px;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .email-body .user-details h2 {
                color: #003366;
                font-size: 18px;
                margin-bottom: 15px;
            }
            .email-body .user-details p {
                font-size: 15px;
                color: #555555;
            }
            .email-footer p {
                color: #ffffff;
                font-size: 14px;
            }
            .email-body i {
                color: #28a745;
                font-size: 60px;
                margin: 20px 0;
            }
            .schedule-button {
                padding: 1rem 2rem;
                display: flex;
                align-items: center;
                text-decoration: none;
                background: #372a25;
                width: 110px;
                height: 20px;
                color: white;
                gap: 1rem;
                border-radius: 20px;
                margin: 0 auto;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <!-- Header with Logo -->
            <div class="email-header">
                <img src="https://iili.io/dvM8eIV.png" alt="Company Logo" />
            </div>

            <!-- Body Content -->
            <div class="email-body">
                <h1>New Call Scheduled</h1>
                <p>
                    You have a new call scheduled from your portfolio website. Here are the details:
                </p>

                <!-- User Details Section -->
                <div class="user-details">
                    <h2>Contact Details</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Selected course:</strong> ${course}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Preferred Time:</strong> ${preferredTime}</p>
                </div>
              
            </div>

            <!-- Footer with Logo -->
            <div class="email-footer">
                <img src="https://iili.io/dvM8eIV.png" alt="Company Logo" />
                <p>&copy; ${new Date().getFullYear()} Integrate. All rights reserved.</p>
            </div>
        </div>
    </body>
</html>
`;
}
