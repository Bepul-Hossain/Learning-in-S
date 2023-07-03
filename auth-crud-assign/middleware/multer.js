const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("Destination");
        cb(null, 'uploads')
    },

    filename: function (req, file, cb) {
        console.log("Filename");
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

function fileFilter(req, file, cb) {
    console.log("fileFilter");
    console.log(file.mimetype);
    req.invalidFileType = false;
    if (file.mimetype !== 'image/jpeg') {
        console.log("Invalid file type");
        req.invalidFileType = true;
        return cb(null, false)
    }
    cb(null, true);
}

const upload = multer({ storage: storage, fileFilter: fileFilter })

// const upload = multer({ dest: 'uploads/' })


const isUploadPhoto = upload.single("photo")

module.exports = {
    isUploadPhoto
}