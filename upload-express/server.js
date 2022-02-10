const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const app = express()
const path = require('path')

//Middleware
app.use(bodyParser.urlencoded({extended:true}))


//Multer
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback (null, 'uploads/')
    },
    filename: (req, file, callback) => {
        callback (null, file.fieldname+'-'+Date.now() +path.extname(file.originalname))
    }
})

const uploads = multer({storage})

app.get('/', (req, res) => {
    // res.json({message: 'Bem vindo'})
    res.sendFile(__dirname +'/index.html')
})

app.post('/upload', uploads.single('arquivo'), (req, res, next) => {
    const file = req.file
    if(!file) {
        const err = new Error("Por favor selecione um aquivo")
        err.httpStatusCode = 400
        return next(err)
    }

    res.send(file)
    // res.end('upload realizado com sucessoQ')
})

app.listen(4000, '127.0.0.1', () => console.log('Server running on http://localhost:4000'))