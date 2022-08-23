import jwt from 'jsonwebtoken';

import User from '../models/userSchema';

export const protectRoute = async (req, res, next) => {
  let token = req.cookies.token;

  if (token) {
    jwt.verify(token, process.env.SESSION_SECRET, async (err, decoded) => {
      if (err) next();
      const user = await User.findById(decoded.id);
      req.user = user;
    });
  }
  next();
};
