import User from "../models/userSchema.js";

// .exec(): 
//     - https://mongoosejs.com/docs/promises.html#queries-are-not-promises
//     - https://stackoverflow.com/a/66490355/12369650

const getAll = async () =>  await User.find({}).exec();

const get = async id => await User.findById(id).exec();

const getByEmail = async email => await User.findOne(email).exec();

export default {
    get,
    getAll,
    getByEmail
}