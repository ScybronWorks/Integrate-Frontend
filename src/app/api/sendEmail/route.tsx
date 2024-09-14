import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface EmailData {
    email: string;
    subject: string;
    message: string;
    phone: string;
    name: string;
    course?: string;
}

export async function POST(req: Request) {
    try {
        const { email, subject, message, phone, name, course }: EmailData = await req.json();

        // Create a transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });
        console.log(process.env.GMAIL_USER, process.env.GMAIL_PASS);
        // Email options
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_TO_EMAIL,
            subject: subject,
            html: createEmailTemplate({ email, subject, message, phone, name, course }),
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
function createEmailTemplate({ email, subject, message, phone, name, course }: EmailData) {
    return `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enquiry Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f1f1f1;
            margin: 0;
        }
        .container {
            background-color: #f6b662;
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            border-radius: 8px;
            overflow: hidden;
        }
        .inner-container {
            background-color: #372a25;
            padding: 40px;
            color: #ffffff;
        }
        header {
            text-align: center;
        }
        .email-footer {
            background-color: #003366;
            color: #ffffff;
            text-align: center;
            padding: 20px;
        }
        hr {
            border: 0;
            height: 4px;
            background-color: #f6b662;
            margin: 20px 0;
        }
        h1 {
            color: #f6b662;
            font-size: 24px;
        }
        .enquiry-submission {
            margin-top: 30px;
        }
        .enquiry-submission table {
            width: 100%;
            border-collapse: collapse;
        }
        .enquiry-submission th, .enquiry-submission td {
            padding: 10px;
            text-align: left;
        }
        .enquiry-submission th {
            color: #f6b662;
            font-weight: bold;
        }
        .email-footer {
            font-size: 12px;
            color: #000000;
            padding: 20px 0;
        }
        .email-footer p{
        color: white;
        }
        .address {
            margin: 0 auto;
            width: 80%;
        }
        @media only screen and (max-width: 600px) {
            .container {
                width: 100%;
            }
            .enquiry-submission th, .enquiry-submission td {
                display: block;
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="inner-container">
            <header>
                <h1>Enquiry Submission</h1>
            </header>
            <hr />
            <section>
                <p>Hi Admin, you have a new enquiry submission from ${name}.</p>
                <div class="enquiry-submission">
                    <table>
                        <tbody>
                            <tr>
                                <th>Client Name:</th>
                                <td>${name}</td>
                            </tr> 
                            <tr>
                                <th>Client's Email Address:</th>
                                <td>${email}</td>
                            </tr>
                            <tr>
                                <th>Client's Contact Number:</th>
                                <td>${phone}</td>
                            </tr>
                            ${
                                course
                                    ? `
                            <tr>
                                <th>Client's Selected Course:</th>
                                <td>${course}</td>
                            </tr>`
                                    : ''
                            }
                            <tr>
                                <th>Client's Subject:</th>
                                <td>${subject}</td>
                            </tr>
                            <tr>
                                <th>Client's Message:</th>
                                <td>${message}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
       <div class="email-footer">
            <p>&copy; ${new Date().getFullYear()} Integrate. All rights reserved.</p>
        </div>
    </div>
</body>
</html>

      `;
}
