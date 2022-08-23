import jwt from 'jsonwebtoken';

import { logger } from '../../config/index.js';
import User from '../../models/userSchema.js';

// Register new user account
export const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, isInstructor } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(400).json({ error: 'Invalid inputs' });
    }
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      isInstructor,
    });
    const token = jwt.sign({ id: user._id }, process.env.SESSION_SECRET, {
      expiresIn: 86400,
    });
    res.cookie('token', token, { httpOnly: true, maxAge: 8640000 });

    const newUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isInstructor: user.isInstructor,
    };

    res.json(newUser);
  } catch (error) {
    logger.info(error.message);
    res.status(500).send('Server error');
  }
};

// Login existing user
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Missing inputs' });
    }

    const user = await User.findOne({ email });
    const passwordMatches = await user.matchPassword(password);
    if (!user || !passwordMatches) {
      res.status(400).json({ error: 'Invalid credentials' });
    } else {
      const token = jwt.sign({ id: user._id }, process.env.SESSION_SECRET, {
        expiresIn: 86400,
      });

      res.cookie('token', token, { httpOnly: true, maxAge: 8640000 });

      const newUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isInstructor: user.isInstructor,
      };

      res.json(newUser);
    }
  } catch (error) {
    logger.info(error.message);
    res.status(500).send('Server error');
  }
};

// Logout user
export const logout = (req, res) => {
  res.clearCookie('token');
  res.send('User successfully logged out');
};
