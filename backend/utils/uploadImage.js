const multer = require('multer') 
const uploadImage = (req, res, next) => {
    const upload = multer({dest : "/uploads"})
    
}
module.exports = uploadImage