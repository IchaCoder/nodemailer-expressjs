import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODE_MAILER_SENDER,
    pass: process.env.NODE_MAILER_PASSWORD,
  },
});

// const mailOptions = {
//   from: "ichabordyeboah247@gmail.com",
//   to: "eyeboah114@st.ug.edu.gh",
//   subject: "Test Email",
//   html: "<h1>Message sent</h1>",
// };

// transporter
//   .sendMail(mailOptions)
//   .then((info) => {
//     console.log(info);
//     console.log("Email Sent");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

export default transporter;
