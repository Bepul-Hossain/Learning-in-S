const multer = require('multer');
const upload = multer({ dest: 'uploads/' })


const isUploadPhoto = upload.single("photo")

module.exports={
    isUploadPhoto
}