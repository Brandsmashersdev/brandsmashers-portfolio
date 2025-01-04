import nodemailer from "nodemailer";
import ExcelJS from "exceljs";
import path from "path";
import fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("===========>", req.body)
    const { name, email, phone, help, skills, referral } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587, 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
      from: email, 
      to: process.env.EMAIL_USER, 
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

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Form Submissions");

    worksheet.columns = [
      { header: "Name", key: "name", width: 30 },
      { header: "Email", key: "email", width: 30 },
      { header: "Phone", key: "phone", width: 20 },
      { header: "Help", key: "help", width: 20 },
      { header: "Skills", key: "skills", width: 30 },
      { header: "Referral", key: "referral", width: 30 },
    ];

    worksheet.addRow({
      name,
      email,
      phone,
      help,
      skills,
      referral,
    });

    const filePath = path.join(process.cwd(), "public", "form-submissions.xlsx");
    try {
      await workbook.xlsx.writeFile(filePath);
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
