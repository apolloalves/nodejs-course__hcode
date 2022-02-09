const express = require('express')
const router = express.Router()

router.get('/', ( req, res ) => res.send('Access route guest'))
router.get('/:id', ( req, res ) => {
    res.send(`Access request from guest user ${req.params.id}`)
})
    
router.post('/', ( req, res ) => {
    const body = `
        login : ${req.body.login}
        passwd: ${req.body.passwd}
        `
        res.send(`Access data users from POST request : ${body}`)
    
})

router.put('/:id', ( req,res ) => res.send('Access from PUT request'))
router.patch('/:id', ( req, res ) => res.send('Access from PATCH request'))
router.delete('/:id', ( req, res ) => res.send('Access from DELETE request'))

module.exports = router