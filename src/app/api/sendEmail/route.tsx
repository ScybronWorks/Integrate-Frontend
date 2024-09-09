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
    return `
   <html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Enquiry Submission</title>
    <style>
        body {
            font-family: Poppins, sans-serif;
            padding: 20px;
            background: #f1f1f1;
        }
        .container {
            background-color: #f6b662;
            width: 80%;
            max-width: 600px;
            margin: 0 auto;
        }
        .inner_container {
            background-color: #372a25;
            padding: 50px;
            color: #ffffff;
        }
        header, footer {
            text-align: center;
        }
        .email_inner_section {
            padding: 20px 0 50px 0;
        }
        hr {
            height: 5px;
            background-color: #f6b662;
            border: none;
        }
        h1 {
            color: #f6b662;
        }
        .enquiry_submission table {
            text-align: left;
            margin-top: 50px;
            width: 100%;
            border-collapse: collapse;
        }
        .enquiry_submission th, .enquiry_submission td {
            padding: 10px;
            color: #ffffff;
        }
        .enquiry_submission th {
            color: #f6b662;
            font-weight: bold;
        }
        .email_footer {
            font-size: 10px;
            color: black;
            padding: 20px 0;
        }
        .email_footer a {
            color: #ffffff;
            text-decoration: none;
        }
        .address {
            width: 50%;
            margin: 0 auto;
        }
        @media only screen and (max-width: 500px) {
            .enquiry_submission th, .enquiry_submission td {
                display: block;
                width: 100% !important;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="inner_container">
            <header>
                <img src="https://iili.io/dvM8eIV.png" width="150px" alt="Logo" />
                <h1>Enquiry Submission</h1>
            </header>
            <hr />
            <div class="email_content">
                <div class="email_inner_section">
                    <section>
                        <h3>Hi Admin, you have a new enquiry submission from ${name}.</h3>
                    </section>
                    <section class="enquiry_submission">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Client Name</th>
                                    <td>${name}</td>
                                </tr>
                                <tr>
                                    <th>Client's Email Address</th>
                                    <td>${email}</td>
                                </tr>
                                <tr>
                                    <th>Client's Contact Number</th>
                                    <td>${phone}</td>
                                </tr>
                                ${
                                    course
                                        ? `
                                <tr>
                                    <th>Client's Selected Course</th>
                                    <td>${course}</td>
                                </tr>`
                                        : ''
                                }
                                <tr>
                                    <th>Client's Subject</th>
                                    <td>${subject}</td>
                                </tr>
                                <tr>
                                    <th>Client's Message</th>
                                    <td>${message}</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
            </div>
        </div>
        <footer>
            <section class="email_footer">
                <img src="https://iili.io/dvM8eIV.png" width="150px" alt="Logo" style="margin-bottom: 30px" />
                <p class="address">
                    Integrate Edutech Pvt. Ltd. Third Second Floor, House number 33, Santhi Nagar residence, Muppathadam (P.O) Aluva
                </p>
                <p>
                    Copyright &copy; ${new Date().getFullYear()} Integrate All Rights Reserved
                </p>
                <p>If you no longer wish to receive these emails, you can <a href="unsubscribe-link">unsubscribe here</a>.</p>
            </section>
        </footer>
    </div>
</body>
</html>

      `;
}
