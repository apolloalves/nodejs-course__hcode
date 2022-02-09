const express = require('express')
const router = express.Router()

router.get('/',( req, res ) => res.send('acessando a rota dos usuarios'))
router.put('/:id', ( req, res ) => res.send('Access from PUT'))
router.patch('/:id', ( req, res ) => res.send('Access from PATCH'))
router.delete('/:id', ( req,res ) => res.send('Access from DELETE'))

router.post('/',( req, res ) =>  { 

    const body = `
    Login: ${req.body.login}
    Senha: ${req.body.pass}`
    res.send(`Listing users: \n ${body}`)
})


module.exports = router

