
const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/user')




const db = "mongodb+srv://HollieMadison:Molly12345!@cluster0.bxsbc.mongodb.net/employeedb?retryWrites=true&w=majority"

mongoose.connect(db, err => {

    if (err) {
        console.error('Error!' + err)
    } else {
        console.log('Connected to Mongodb')
    }


})


const router = express.Router();
//router.get('/', (req,res) => {
//  res.send('From API route')
//})

router.post("/register", (req, res) => {
    var user = new User(req.body); // video 8 this method might cause error
    user.save()
        .then(registeredUser => {
            res.status(200).send(registeredUser)
        })
        .catch(err => {
            res.status(400).send(err);
        });
});


router.post("/login", (req, res) => {

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
                res.status(200).send(user)
            }


        }

    })


});


router.get("/events", (req, res) => {

    let events = [
        {
            "_id": "1",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "2",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "3",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "4",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "5",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "6",
            "name": "Auto Expo",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        }
    ]
    res.json(events)

});


router.get('/special',(req, res) => {
    let specialEvents = [
        {
            "_id": "1",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "2",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "3",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "4",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "5",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        },
        {
            "_id": "6",
            "name": "Auto Expo Special",
            "description": "lorem ipsum",
            "date": "2012-04-23T18:25:43.511Z"
        }
    ]
    res.json(specialEvents)
});

module.exports = router



