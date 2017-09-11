var express = require('express');
var router = express.Router();
var upload = require('../middleware/upload');

// 上传单个文件
router.post('/single', upload.single('single'), function (req, res, next) {
    console.log(req.file);
    res.send({ ret_code: '0' });
});

module.exports = router;
