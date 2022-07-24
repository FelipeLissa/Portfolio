
const nodemailer = require("nodemailer")
const config = require('../../../config.local')
export default function sendEmail(req, res) {
    let transporter = nodemailer.createTransport ({
        host:'smtp-mail.outlook.com',
        secureConnection: false,
        port:'587',
        auth: {
            user: config.USERMAIL,
            pass:process.env.PASSMAIL
        },
        tls: {
            ciphers:'SSLv3'
        }
    })
    transporter.sendMail({
        from: config.USERMAIL, 
        to: config.USERMAIL,
        subject: "Contato feito pelo Portfólio ✔",
        text: req.body.name+req.body.email+req.body.message,
        html:`<h1>${req.body.name}<h1/> <br/><h2> ${req.body.email}<h2/> <br/> <h2>${req.body.message}<h2/>`
      }).then((response) => { res.send(response)});
}
