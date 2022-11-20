const multer = require('multer') 
const uploadImage = (req, res, next) => {
    const storage = multer.diskStorage({
        destination : function(req, file, cb){
            cb(null, './uploads')
        }, 
        filename : function(req, file, cb) {
            cb(null, file.originalname) 
        }
    })
    const upload = multer({storage : storage})
    upload.single(req.file)
    // console.log(JSON.stringify(req.file))
    res.send('<h1> I upload images </h1>')
}
module.exports = uploadImage