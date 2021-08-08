const { userModel } = require('../../db/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

module.exports = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) res.status(400).json({
    property: error.array()[0].param,
    message: error.array()[0].msg
  })

  const isExist = await userModel.findOne({
    where: {
      email: req.body.email
    }
  });

  if (isExist && isExist.id) {
    res.status(409).json({
      message: 'User already registered'
    })
  } else {
    const salt = bcrypt.genSaltSync();
    const created = await userModel.create({

      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, salt),
      fullName: req.body.fullName

    })
    const token = jwt.sign({
      email: created.email
    }, process.env.JWT_SECRET, {
      algorithm: 'HS256'
    })
    res.setHeader('authorization', `Bearer ${token}`);
    res.status(200).json({
      success: true
    })
  }

}
