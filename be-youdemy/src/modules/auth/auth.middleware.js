import { auth } from "./auth.service.js";

export default (req, res, next) => {
  const token = req.cookies[auth.cookie];

  if (!token) return res.status(403);

  const { userId, isInstructor } = auth.decodeToken(token);

  req.userId = userId;
  req.isInstructor = isInstructor;

  return next();
};
