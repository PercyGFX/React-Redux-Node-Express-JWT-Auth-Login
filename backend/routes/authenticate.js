const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
require('dotenv').config();


// is authenticated check

router.post('/isauthenticated', (req,res)=>{

    const token = req.headers.token
})


// login
router.post('/login', (req,res)=>{

    const username = "test@gmail.com"
    const password = "123456"
    const userId = 123
    try{
        if(req.body.username == username ) {

            if(req.body.password == password){

                //username and password is correct
                const payload = {
                    username,
                    userId
                };

                const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h'  });

                res.cookie('token', token, {
                    httpOnly: false,
                    path: '/',
                    expires: new Date(Date.now() + 3600000)
                })

                res.status(200).json({
                    success:true,
                    username: username,
                    message: "Login Sucess"
                })
            } else {

                res.status(401).json({
                    success: false,
                    message: "Password error"
                })
            }

        } else {

            res.status(401).json({
                success: false,
                message: "Username not found"
            })
        }

    }
    catch (err){

        res.status(401).json({
            success: false,
            message: "internal server error"
        })
    }
})

module.exports =  router