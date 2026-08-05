const User = require("../models/User.js");

const signup = async (req, res) => {
    res.send("signup api");
};

const login = async (req, res) => {
    res.send("login api");
};

module.exports = {
    signup,
    login,
}