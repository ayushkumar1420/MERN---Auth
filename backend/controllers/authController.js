const User = require("../models/User.js");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if(existingUser){
            return res.status(400).json({
                message: "User already exists!",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email, 
            password: hashedPassword,
        });

        res.status(201).json({
            message: "User created succesfully",
            user,
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if(!user){
            return res.status(400).json({
                message: "invalid email or password",
            });
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if(!isPasswordCorrect){
            return res.status(400).json({
                message: "invalid email or password",
            });
        }

        res.status(200).json({
            message: "login successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });

    } catch (error) {
        res.status(500).json({
            message: "server error",
        });
    }
};

module.exports = {
    signup,
    login,
}