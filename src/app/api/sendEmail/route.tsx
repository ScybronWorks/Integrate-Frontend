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
        const template = createEmailTemplate({ email, subject, message, phone, name });
        // Email options
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: email, // Recipient's email
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
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
              body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f4f4f4;
              }
              .container {
                  width: 100%;
                  max-width: 600px;
                  margin: 0 auto;
                  background-color: #ffffff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
              .header {
                  background-color: #4CAF50;
                  color: #ffffff;
                  padding: 10px;
                  text-align: center;
                  border-radius: 8px 8px 0 0;
              }
              .content {
                  margin: 20px 0;
              }
              .footer {
                  text-align: center;
                  font-size: 12px;
                  color: #888888;
              }
              .button {
                  display: inline-block;
                  padding: 10px 20px;
                  font-size: 14px;
                  color: #ffffff;
                  background-color: #4CAF50;
                  text-decoration: none;
                  border-radius: 4px;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h1>Enquiry Received</h1>
              </div>
              <div class="content">
                  <p>Hello,</p>
                  <p>We have received a new enquiry with the following details:</p>
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Phone:</strong> ${phone}</p>
                  <p><strong>Subject:</strong> ${subject}</p>
                  ${course && <p>{course}</p>}
                  
                  <p><strong>Message:</strong></p>
                  <p>${message}</p>
                  <p>Thank you for reaching out to us. We will get back to you shortly.</p>
              </div>
              <div class="footer">
                  <p>&copy; 2024 Integrate. All rights reserved.</p>
              </div>
          </div>
      </body>
      </html>
      `;
}
