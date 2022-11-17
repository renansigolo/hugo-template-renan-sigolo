const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});

/** Sends an email. */
// .runWith({secrets: ['GMAIL_USER, GMAIL_PASS']})
exports.sendEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // Configure Transporter
    const mailTransport = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const email = req.body.email;
    const mailOptions = {
      from: 'Cloud Function <noreply@firebase.com>',
      to: email,
      subject: 'The email subject field!',
    };
    mailOptions.text = `Email: ${email}`;
    console.log('🚀 ~ .onRequest ~ mailOptions', mailOptions);

    return mailTransport.sendMail(mailOptions, (err) => {
      return res.status(500)
          .send({name: 'Error', message: err || 'Something went wrong!'});
      // return err ?
      //   res.status(500).send(err) :
      //   res.status(200).send({message: 'success'});
    });
    // return sendWelcomeEmail(mailTransport, req.body.email);}
  });
});

exports.helloWorld = functions.https.onRequest((req, res) => {
  functions.logger.info('Hello logs!', {structuredData: true});
  functions.logger.info('GMAIL_USER', process.env.GMAIL_USER);
  res.send('Hello from Firebase!');
});

// For Gmail, enable these:
// 1. https://www.google.com/settings/security/lesssecureapps
// 2. https://accounts.google.com/DisplayUnlockCaptcha

// // Sends a welcome email to the given user.
// async function sendWelcomeEmail(mailTransport, email) {
// return mailTransport.sendMail(mailOptions, (err) =>
//   err ?
//   res.status(500).send(err) :
//   res.status(200).send({message: 'success'})
// );
//   // return await mailTransport.sendMail(mailOptions);
//   // functions.logger.log('New welcome email sent to:', email);
//   // return null;
// }
