const { userModel } = require('../../db/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

module.exports = async (req, res, next) => {
  const error = validationResult(req);
  if (error) res.status(400).json({
    property: error[0].property,
    message: error[0].message
  })

  const isExist = await userModel.findOne({
    where: {
      email: req.body.email
    }
  });
  if (isExist && bcrypt.compareSync(req.body.password, isExist.password)) {
    const jwt = jwt.sign({
      email: isExist.email
    }, process.env.JWT_SECRET, {
      algorithm: 'HS256'
    })
    res.setHeader('authorization', `Bearer ${jwt}`);
    res.status(200).json({
      success: true
    })
  } else {
    res.status(401).json({ message: 'Incorrect email and/or password' });
  }
}
