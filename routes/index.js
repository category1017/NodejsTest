var express = require('express');
var router = express.Router();

/* 컨트롤러 같은 역할 GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'IoT 익스프레스 Express' });
	digitalWrite(7, HIGH);
});

module.exports = router;
