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
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Call Scheduled</title>
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

        .email-header img {
            max-width: 150px;
            height: auto;
        }

        .email-body {
            padding: 30px;
            text-align: center;
        }

        .email-body h1 {
            color: #003366;
            font-size: 22px;
            margin-bottom: 20px;
        }

        .email-body p {
            color: #333333;
            font-size: 16px;
            line-height: 1.6;
            margin: 20px 0;
        }

        .user-details {
            background-color: #f4f4f4;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
            text-align: left;
        }

        .user-details p {
            font-size: 15px;
            color: #555555;
        }

        .email-footer p {
            font-size: 14px;
            color: #ffffff;
        }

        /* Ensure this button is styled simply */
        .schedule-button {
            padding: 10px 20px;
            background-color: #372a25;
            color: white;
            text-decoration: none;
            border-radius: 20px;
            display: inline-block;
            margin-top: 20px;
        }

        .schedule-button:hover {
            background-color: #2e211b;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <!-- Header with Logo -->

        <!-- Body Content -->
        <div class="email-body">
            <h1>New Call Scheduled</h1>
            <p>
                You have a new call scheduled from your portfolio website. Here are the details:
            </p>

            <!-- User Details Section -->
            <div class="user-details">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Selected course:</strong> ${course}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Preferred Time:</strong> ${preferredTime}</p>
            </div>
        </div>

        <!-- Footer -->
        <div class="email-footer">
            <p>&copy; ${new Date().getFullYear()} Integrate. All rights reserved.</p>
        </div>
    </div>
</body>

</html>

`;
}
