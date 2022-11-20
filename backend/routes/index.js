const route = require('express').Router()
const path = require('path')
const multer = require('multer')
const upload = multer({dest : path.dirname(__dirname) + '/uploads'})
const uploadImage = (req, res, next) => {
}
route. 
    post('/uploads', upload.single('file'), uploadImage)
module.exports = route