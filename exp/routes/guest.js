const express = require('express')
const router = express.Router()

router.get('/', ( req, res ) => res.send('Access from guest'))

router.post('/', ( req, res ) => {
    const body = `
        login : ${req.body.login}
        passwd: ${req.body.passwd}
        `
        res.send(`Access data users from POST request : ${body}`)
    
})

module.exports = router