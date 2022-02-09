const expresss = require('express')
const router = expresss.Router()

router.get( '/', ( req, res ) => res.send('Access adm'))

router.get( '/:id', ( req, res ) => {
    res.send('Acessando administração com o id:' + req.params.id)
})

router.post( '/', ( req, res ) => {
    const corpo = 
    `Login: ${req.body.login}
     Senha: ${req.body.senha}`
    res.send(`Acess adm from POST request: ${corpo}\n`)

})

router.patch('/:id', ( req, res ) => { res.send('Access administration via PATH') })
router.put('/:id', ( req, res ) => { res.send('Access administration via PUT') })
router.delete('/:id',(req, res) => { res.send('Access administration from DELETE') }) 


module.exports = router