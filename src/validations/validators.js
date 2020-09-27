const {body} = require('express-validator');

exports.hasFirst_name = body('description')
  .isLength({min: 2})
  .withMessage("Le champ first_name n'est pas renseigné (minimum 2 caractères)")
  .isString()
  .withMessage('Le champ first_name doit être une chaîne de caractères')
  error.statusCode = 400
exports.isEmail = body('email')
  .isEmail()
  .withMessage('Email fields must contain a correct email address');
exports.hasPassword = body('password')
  .exists()
  .withMessage('Password is required/ cannot be empty');
exports.hasName = body('name')
  .isLength({min: 5})
  .withMessage("Name is required. Min Length 5 characters");