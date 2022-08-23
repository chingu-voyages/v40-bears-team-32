import jwt from 'jsonwebtoken';

import User from '../models/userSchema';

export const protectRoute = (req, res, next) => {
  const token = req.cookies.token;

  if (token) {
    // Verify/decode token
    jwt.verify(token, process.env.SESSION_SECRET, async (err, decoded) => {
      if (err) next();
      // If token is valid, search for user with corresponding ID from decoded token
      const user = await User.findById(decoded.id);
      // Set custom user field into the request with current user data
      req.user = user;
    });
  }
  next();
};
