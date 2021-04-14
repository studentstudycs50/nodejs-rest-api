const Mailgen = require('mailgen');
const nodemailer = require('nodemailer');
require('dotenv').config();

const config = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: 'veklychs@meta.ua',
    pass: process.env.PASSWORD,
  },
};
const transporter = nodemailer.createTransport(config);

const mailGenerator = new Mailgen({
  theme: 'default',
  product: {
    name: 'Developer of this server',
    link: 'https://localhost:3000/',
  },
});

const sendMail = async (verifyToken, email) => {
  const template = {
    body: {
      name: email,
      intro: 'Email verification needed',
      action: {
        instructions: 'To complete the registration process please press the button:',
        button: {
          color: '#22BC66', 
          text: 'Confirm email',
          link: `http://localhost:3000/api/users/verify/${verifyToken}`,
        },
      },
      outro: "Need help, or have questions? Please figure it out yourselves, we can't be bothered to help you",
    },
  };

  const verificationMail = mailGenerator.generate(template);

  const emailOptions = {
    from: 'veklychs@meta.ua',
    to: 'veklychsveta@gmail.com',
    subject: 'Email verification',
    html: verificationMail,
  };

  await transporter.sendMail(emailOptions);
};

module.exports = sendMail;