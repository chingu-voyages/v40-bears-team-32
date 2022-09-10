const userNotFound = {
  status: 404,
  cause: "User not found",
};

const emailNotValid = {
  status: 400,
  cause: "Invalid email",
};

export { userNotFound, emailNotValid };
