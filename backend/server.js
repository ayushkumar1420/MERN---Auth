const express = require("express");
const app = express()
const dns = require("dns");
dns.setServers(["8.8.8.8", "4.4.4.4"]);
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const authRoutes = require("./routes/authRoutes.js")

dotenv.config();

connectDB();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("hello to new world")
})

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log("server is running on port 3000"); 
});