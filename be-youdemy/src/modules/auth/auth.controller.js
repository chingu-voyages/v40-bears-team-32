import { auth } from "./auth.service.js";
import UserService from "../user/user.service.js";

// credit for auth code: https://github.com/joshnho
const cookieOpts = {
  httpOnly: true,
  maxAge: auth.expiryTime,
};

const signup = async (req, res) => {
  const rawUser = req.body;

  // User already exists
  if (await UserService.getByEmail({ email: rawUser.email })) {
    // src: https://stackoverflow.com/questions/26587082
    return res.status(409).json({ error: "Email already in use" });
  }

  const savedUser = await UserService.create(rawUser);
  const jwt = auth.generateToken(savedUser.id, savedUser.isInstructor);
  res.cookie(auth.cookie, jwt, cookieOpts);

  // return saved user without password
  return res.json(savedUser);
};

const login = async (req, res) => {
  const rawCred = req.body;
  const savedUser = await UserService.getByEmail(rawCred.email);

  if (
    !savedUser ||
    (await auth.isValid(rawCred.password, savedUser.password))
  ) {
    return res.status(400).json({ error: "Invalid Credentials" });
  }

  const jwt = auth.generateToken(savedUser.id, savedUser.isInstructor);
  res.cookie(auth.cookie, jwt, cookieOpts);

  // return saved user without password
  return res.json({ ...savedUser, password: "" });
};

const logout = (req, res) =>
  res.clearCookie(auth.cookie).status(200).json("User successfully logged out");

export default {
  signup,
  login,
  logout,
};
