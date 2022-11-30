const Users = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        let { registerUsername, registerEmail, registerPassword } = req.body;
        console.log("Register User", req.body);

        // validate
        if (!registerUsername || !registerEmail || !registerPassword) {
            return res.status(400).json({
                msg: "Not all fields have been entered."
            });
        }
        if (registerPassword.length < 5) {
            return res.status(400).json({
                msg: "The password needs to be atleast 5 characters long"
            });
        }
        if (!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(registerEmail).toLowerCase()))) {
            return res.status(400).json({
                msg: "Invalid Email"
            })
        }

        const existingUser = await Users.findOne({ email: registerEmail });
        if (existingUser) {
            return res.status(400).json({
                msg: "An account with this email already exists"
            });
        }

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(registerPassword, salt);
        const newUser = new Users({
            username: registerUsername,
            email: registerEmail,
            password: passwordHash
        });
        const savedUser = await newUser.save();
        return res.status(200).json({
            msg: "User created with username: " + savedUser.username + " and email: " + savedUser.email
        });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.login = async (req, res) => {
    try {
        const { loginEmail, loginPassword } = req.body;
        // validate
        if (!loginEmail || !loginPassword) {
            return res.status(400).json({
                msg: "Not all fields have been entered."
            })
        };
        const user = await Users.findOne({ email: loginEmail });
        if (!user) {
            return res.status(400).json({
                msg: "No account with this email has been registered"
            });
        }
        const isMatch = await bcrypt.compare(loginPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({
                msg: "Invalid credentials"
            });
        }
        const token = jwt.sign({ isAdmin: user.isAdmin, username: user.username }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });
        return res.json({
            token, user: {
                username: user.username
            },
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}