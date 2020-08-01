const express = require('express');
const router = express.Router();
const api = require('../controllers/apiController');
const { userValidationRules, validate } = require('../middlewares/ValidateReq.js')

/* GET home page. */
router.get('/package', api.getPackage);
router.get('/package/:id', api.getPackageById);
router.put('/package/:id', userValidationRules(), validate, api.packagePut);
router.patch('/package/:id', userValidationRules(), validate, api.packagePut);
router.delete('/package/:id', api.packageDelete);
router.post('/package', userValidationRules(), validate, api.packagePost);

module.exports = router;
