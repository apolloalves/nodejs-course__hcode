const express = require( 'express' )
const app = express()

const adminRouters = require('./routes/admin')
const userRouters = require('./routes/users')
const guestRouters = require('./routes/guest')

app.use(express.json())

app.use('/admin', adminRouters)
app.use('/users', userRouters)
app.use('/guest', guestRouters)


app.get( '/', ( req, res ) => res.send('ExpressJS running now') )

app.listen(3000, () => console.log('Server runnig at http://localhost:3000'))







