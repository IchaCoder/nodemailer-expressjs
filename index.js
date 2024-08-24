import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import transporter from "./send-mail.js";

dotenv.config();
console.log(process.env.NODE_MAILER_SENDER);

const app = express();

app.use(express.json());

app.use(cors());

const mailOptions = {
  from: "eyeboah114@st.ug.edu.gh",
  to: "ichabordyeboah247@gmail.com",
  subject: "CMS Notification",
  html: "<h1>Message sent</h1>",
};

const PORT = process.env.PORT || 4000;

app.post("/api/send-email", (req, res) => {
  const { to, message } = req.body;

  transporter
    .sendMail({
      ...mailOptions,
      to,
      html: message,
    })
    .then((info) => {
      // console.log(info);
      res.send("Email Sent");
    })
    .catch((err) => {
      console.log(err);
      res.send("Error Occurred");
    });
});

app.get("/", (req, res) => {
  res.send("SEND EMAIL API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
