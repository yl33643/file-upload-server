var express = require('express');
var router = express.Router();

// 上传单个文件
router.post('/single', function (req, res, next) {
    res.send({ ret_code: '0' });
});

module.exports = router;
