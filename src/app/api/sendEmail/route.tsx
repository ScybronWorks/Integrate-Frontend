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
    <!-- HEAD -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Enquiry Form</title>
    <style>
      body {
        font-family: Poppins, sans-serif;
        padding: 20px;
        background: #f1f1f1;
      }
      .container {
        background-color: #000000;
        width: 80%;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }
      .inner_container {
        background-color: rgb(215, 215, 215);
        padding: 50px;
      }

      header,
      footer {
        text-align: center;
      }

      .email_inner_section {
        padding: 20px 0 50px 0;
      }

      hr {
        height: 5px;
        background-color: brown;
        border-color: brown;
      }

      h1 {
        color: brown;
      }

      .enquiry_submission table {
        text-align: left;
        margin-top: 50px;
      }

      .enquiry_submission table tbody tr th {
        width: 30%;
        vertical-align: top;
      }

      .enquiry_submission th,
      .enquiry_submission td {
        padding: 10px;
        margin: 0;
      }

      .enquiry_submission th {
        color: brown;
        font-weight: 900;
        font-size: 0.8rem;
      }

      .enquiry_submission td {
        font-weight: 100;
      }

      .email_footer {
        font-size: 10px;
        color: #ffffff;
        padding: 20px 0;
      }

      .email_footer a {
        color: #ffffff;
        text-decoration: none;
      }

      @media only screen and (max-width: 500px) {
        .enquiry_submission th,
        .enquiry_submission td {
          display: block;
          width: 100% !important;
        }
      }
    </style>
  </head>

  <!-- BODY -->
  <body>
    <div class="container">
      <div class="inner_container">
        <header>
          <img src="https://i.postimg.cc/YLjxddQm/integral-logo-final.jpg" width="100px" />
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
                      course &&
                      `
                    <tr>
                      <td>Client's Selected Course</td>
                      <td>${course}</td>
                    </tr>
                    `
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
      <!-- Footer -->
      <footer>
        <section class="email_footer">
          <img src="https://i.postimg.cc/YLjxddQm/integral-logo-final.jpg" width="100px" />

          <p>Address 1, 123 Road, MY</p>
          <p>
            Copyright &copy; ${new Date().getFullYear()} Integrate All Rights
            Reserved
          </p>
        </section>
      </footer>
      <!-- footer ends -->
    </div>
  </body>
</html>

      `;
}
