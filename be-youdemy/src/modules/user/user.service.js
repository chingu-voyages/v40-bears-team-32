import UserModel from "./user.schema.js";
import APIError from "../../config/error.js";
import { emailNotValid } from "./user.error.js";
import { extractRequiredAttributes } from "../../config/db.js";
import { validateDTO } from "../../config/utils.js";

// https://masteringjs.io/tutorials/mongoose/mongoose-validate-unique-email
// eslint-disable-next-line
const emailRegex = /.+\@.+\..+/;

// .exec():
//     - https://mongoosejs.com/docs/promises.html#queries-are-not-promises
//     - https://stackoverflow.com/a/66490355/12369650

const getAllInstructors = async () =>
  await UserModel.find({ isInstructor: true }).lean().exec();

const getById = async (id) => await UserModel.findById(id).lean().exec();

const getByEmail = async (email) => await UserModel.findOne(email).exec();

// TODO: check if duplicate emails are prevented from being saved
const create = async (raw) => {
  validateDTO(raw, extractRequiredAttributes(UserModel));

  if (!raw.email.match(emailRegex))
    throw new APIError(emailNotValid.status, emailNotValid.cause);

  // Ensure index on emails is built to catch duplicate emails
  await UserModel.init();

  const savedUser = new UserModel({ ...raw });

  return (await savedUser.save()).toObject();
};

export default {
  getAllInstructors,
  getById,
  getByEmail,
  create,
};
