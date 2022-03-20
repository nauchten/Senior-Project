
const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/user')
const jwt = require('jsonwebtoken')



const db = "mongodb+srv://HollieMadison:Molly12345!@cluster0.bxsbc.mongodb.net/employeedb?retryWrites=true&w=majority" // Our MongoDB database

mongoose.connect(db, err => { // Connects to the database

    if (err) {
        console.error('Error!' + err)
    } else {
        console.log('Connected to Mongodb')
    }


})


const router = express.Router();


router.post("/register", (req, res) => {
    var user = new User(req.body); // video 8 this method might cause error
    user.save()
        .then(registeredUser => {
           let payload = { subject: registeredUser._id}
           let token = jwt.sign(payload, 'secretKey') // Generating token
            res.status(200).send({token}) // Sending token
        })
        .catch(err => {
            res.status(400).send(err);
        });
});


router.post("/api/login", (req, res) => {

    let userData = req.body

    User.findOne({email: userData.email}, (error, user) => {
        if (error) {
            console.log(error)
        } else {
            if(!user) {
                res.status(401).send('Invalid email')
            } else
            if( user.password !== userData.password){
                res.status(401).send('Invalid password')
            } else {
                let payload = { subject: user._id}
                let token = jwt.sign(payload, 'secretKey') // Generating token
                res.status(200).send({token}) // Sending token
            }


        }

    })


});


module.exports = router



