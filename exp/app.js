const express = require( 'express' )
const app = express()

const adminRouters = require('./routes/admin')
const userRouters = require('./routes/users')
const guestRouters = require('./routes/guest')
const cookieParser = require('cookie-parser')

//middleware - func
app.use(express.json())
app.use(cookieParser())

//midlewares routes
app.use('/admin', adminRouters)
app.use('/users', userRouters)
app.use('/guest', guestRouters)

app.use(( req, res, next ) => {
    console.log('Executando midleware em nivel de app')
    return next()
})

app.get( '/', ( req, res ) => res.send('ExpressJS running now') )

app.get('/setcookie', ( req,res ) => {
    res.cookie('user', 'Apollo Alves', {maxAge: 900000, httpOnly: true})
    return res.send('Cookie gravado com sucesso!')
})

app.get('/getcookie', ( req, res ) => {
    
    let user = req.cookies['user']
    if(user) return res.send(user)

})

app.get('*', (req, res, next) => {
    setImmediate(() => {
        next( new Error('Temos um problema'))
    })
})

app.use(( err,req, res, next ) => {
    console.log(err.stack)
    res.status(500).json({message: err.message})
})








app.listen(3000, () => console.log('Server runnig at http://localhost:3000'))







