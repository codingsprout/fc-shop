const express = require('express')
const router = express.Router()
const User = require('../database/user')

router.post('/login', (req, res) => {

})

router.post('/register', (req, res) => {
    User.findOne({ email: req.body.email })
    .exec((error, user) => {
        if(user) return res.status(400).json({message: 'User already registered!'})
        
        const {
            firstName, 
            lastName, 
            email, 
            password
        } = req.body

        const USER = new User({
            firstName, 
            lastName, 
            email, 
            password, 
            userName: Math.random().toString()
        })

        USER.save((error, data) => {
            if(error) {
                return res.status(400).json({
                    message: 'Something went wrong! Cero is afk...'});
                }
            if(data) {
                return res.status(201).json({message: 'User created successfully!' })}
        }) 
    })
})

module.exports = router