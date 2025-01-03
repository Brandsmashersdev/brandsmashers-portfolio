import nodemailer from "nodemailer";
import ExcelJS from "exceljs";
import path from "path";
import fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("===========>", req.body)
    const { name, email, phone, help, skills, referral } = req.body;

    // Set up Nodemailer transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587, // Use Gmail or any other email service
      auth: {
        user: 'raina.bergnaum@ethereal.email', // Your email address
        pass: 'jpmQPAhnytNCZJs2ae', // Your email password
      },
    });

    // Email content
    const mailOptions = {
      from: email, // Sender's email
      to: 'raina.bergnaum@ethereal.email', // Recipient email
      subject: "Contact Us Form Submission",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Help:</strong> ${help}</p>
        <p><strong>Skills:</strong> ${skills}</p>
        <p><strong>Referral:</strong> ${referral}</p>
      `,
    };

    // Save the data to Excel file
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Form Submissions");

    // Define columns
    worksheet.columns = [
      { header: "Name", key: "name", width: 30 },
      { header: "Email", key: "email", width: 30 },
      { header: "Phone", key: "phone", width: 20 },
      { header: "Help", key: "help", width: 20 },
      { header: "Skills", key: "skills", width: 30 },
      { header: "Referral", key: "referral", width: 30 },
    ];

    // Add a row with form data
    worksheet.addRow({
      name,
      email,
      phone,
      help,
      skills,
      referral,
    });

    const filePath = path.join(process.cwd(), "public", "form-submissions.xlsx");

    // Write the Excel file to disk
    try {
      await workbook.xlsx.writeFile(filePath);

      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: "Form submitted successfully!" });
    } catch (error) {
      console.error("Error processing form:", error);
      res.status(500).json({ error: "Failed to process form" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
