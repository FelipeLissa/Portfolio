
const nodemailer = require("nodemailer")
export default function sendEmail(req, res) {
    let transporter = nodemailer.createTransport ({
        host:'smtp-mail.outlook.com',
        secureConnection: false,
        port:'587',
        auth: {
            user: process.env.REACT_APP_USERMAIL,
            pass:process.env.REACT_APP_PASSMAIL
        },
        tls: {
            ciphers:'SSLv3'
        }
    })
    transporter.sendMail({
        from: process.env.REACT_APP_USERMAIL,
        to: process.env.REACT_APP_USERMAIL,
        subject: "Contato feito pelo Portfólio ✔",
        text: req.body.name+req.body.email+req.body.message,
        html:`<h1>${req.body.name}<h1/> <br/><h2> ${req.body.email}<h2/> <br/> <h2>${req.body.message}<h2/>`
      }).then((response) => { res.send(response)});
}
