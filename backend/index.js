const express = require("express")
const app = express()
const cors = require('cors')
const authrouter = require('./routes/authenticate')
require('dotenv').config();


// Configure CORS to allow requests from your frontend
app.use(
    cors({
        origin: process.env.FRONTEND_URL, // Replace with your frontend's URL
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true, // Enable credentials (if needed)
    })
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//  routes

app.use('/', authrouter)


app.get("/", (req, res) => {
    res.send("working on 5000");
});



const port = process.env.PORT || 5000; // Default to port 3000 if PORT environment variable is not set
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});