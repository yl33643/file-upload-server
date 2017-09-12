var express = require('express');
var router = express.Router();
var upload = require('../middleware/upload');

var singleUpload = upload.single('single');

// 上传单个文件
router.post('/single', function (req, res, next) {
    singleUpload(req, res, function (err) {
        if (err) {
            return res.status(500).send({ message: '只能上传jpg/png文件 且不超过2kb' });
        }
        console.log(req.file);
        res.send({ ret_code: '0' });
    });
});

module.exports = router;
