var fs = require('fs');
var multer = require('multer');

// Step 1: 新建upload
var createFolder = function (folder) {
    try {
        fs.accessSync(folder);
    } catch (e) {
        fs.mkdirSync(folder);
    }
};

var uploadFolder = './upload/';

createFolder(uploadFolder);

// Step 2: 配置multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

var upload = multer({
    storage: storage,
    limits: { fileSize: 2 * 1000 },
    fileFilter: function (req, file, cb) {
        if (file.mimetype !== 'image/png') {
            return cb(new Error('error'));
        }
        cb(null, true);
    }
});

module.exports = upload;