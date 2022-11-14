
exports.sendMail = async (req, res) => {
    try {
        console.log("getAllDraws", req.body);
        const {name, email, msg} = req.body;

        let transporter = nodemailer.createTransport({
            service: "Gmail",
            secure: false,
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
        `

        let mailOptions = {
            from: '"Fan Club Portal" <no-reply@fanclubportal.com>',
            to: registerEmail,
            subject: "[New Query] Inter IIT Sports",
            html: mail
        }


        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent:', info.messageId);
            res.status(200).json({ message: "Email has been sent, kindly activate your account" });
        })

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}
