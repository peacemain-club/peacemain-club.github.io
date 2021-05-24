const jwt = require('jsonwebtoken');

const PRIVATE_KEY = process.env.JWT_PRIVATE_KEY || '';

async function verifyAccess(req, res, next) {
  try {
    const token = req.headers['x-access-token'] || '';
    jwt.verify(token, PRIVATE_KEY);
    return next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      code: 'auth/invalid-token',
      message: '잘못된 요청입니다.',
    });
  }
}

module.exports = verifyAccess;
