const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Bearer token

  if (!token) return res.status(401).json({ error: 'Access denied, token missing' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Store verified user info in request
    next();
  } catch (err) {
    res.status(403).json({ error: 'Invalid token' });
    throw (err);
  }
  
};

module.exports = authenticateToken;

