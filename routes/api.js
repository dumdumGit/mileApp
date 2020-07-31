const express = require('express');
const router = express.Router();
const api = require('../controllers/apiController');

/* GET home page. */
router.get('/package', api.getPackage);
router.get('/package/:id', api.getPackageById);
router.put('/package/:id', api.packagePut);
router.patch('/package/:id', api.packagePut);
router.delete('/package/:id', api.packageDelete);
router.post('/package', api.packagePost);

module.exports = router;
