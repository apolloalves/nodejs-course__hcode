const express = require( 'express' )
const app = express()

app.get( '/', ( req, res ) => res.send('ExpressJS running now'))
app.get( '/admin', ( req, res ) => res.send('Access adm'))

app.listen(4000, () => console.log('Server runnig at http://localhost:3000'))