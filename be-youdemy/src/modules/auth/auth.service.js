import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const secret = process.env.SESSION_SECRET || "secret";
const expiryTime = 86400;
const saltRounds = 10;
const cookie = "token"; //name on cookie for the JWT token

const generateToken = (userId, isInstructor) => {
  if (!userId || isInstructor === undefined)
    throw Error("Missing user data for JWT Token!");

  return jwt.sign({ id: userId, isInstructor: isInstructor }, secret, {
    expiresIn: expiryTime,
  });
};

const decodeToken = (token) => {
  if (!token) throw Error("Missing Token!");

  return jwt.verify(token, secret); // returns userId, isInstructor or throws an Error
};

const hash = (password) => bcrypt.hash(password, saltRounds);
const isValid = (password, hashedPassword) =>
  bcrypt.compare(password, hashedPassword);

export const auth = {
  expiryTime,
  cookie,
  generateToken,
  decodeToken,
  hash,
  isValid,
};
