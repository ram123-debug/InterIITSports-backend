const nodemailer = require('nodemailer');

exports.sendMail = async (req, res) => {
    try {
        const {name, email, msg} = req.body;

        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mail = `
            <h2>Received new query from </h2>
            <p>Below are the contact details:</p>    
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Query: ${msg} </p>
        `

        let mailOptions = {
            from: '"Inter IIT Website" <interiitsportsinternal@gmail.com>',
            to: "saurabhguptajpr@yahoo.in",
            subject: "[New Query] Inter IIT Sports",
            html: mail
        }


        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent:', info.messageId);
            res.status(200).json({ message: "Email has been sent" });
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}
