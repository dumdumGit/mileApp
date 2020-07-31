const { check, validationResult } = require('express-validator');

  const userValidationRules = () => {
    return [
        check('customer_name').not().isEmpty().withMessage('Nama harus di isi')
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