const route = require('express').Router()
const uploadImage = require('../utils/uploadImage')
route. 
    post('/uploads', uploadImage)
module.exports = route