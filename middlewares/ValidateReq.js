const { check, validationResult } = require('express-validator');

  const userValidationRules = () => {
    return [
        check('customer_name', 'customer name harus di isi').not().isEmpty().isLength({ min: 5, max: 100 }),
        check('transaction_amount', 'transaction amount harus di isi').not().isEmpty().isLength({ min: 1 }),
        check('location_id', 'lokasi harus di isi').not().isEmpty(),
        check('origin_data', 'Origin data harus di isi berupa object').not().isEmpty(),
        check('destination_data', 'destination data harus di isi berupa object').not().isEmpty(),
        check('koli_data', 'koli field harus di isi berupa array').not().isEmpty(),
        check('koli_data', 'koli field harus di isi berupa array').not().isEmpty(),
        check('connote', 'field harus di isi').not().isEmpty(),
    ]
  }


const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  
    return res.status(422).json({
      errors: extractedErrors,
    })
  }

  module.exports = {
    userValidationRules,
    validate,
  }