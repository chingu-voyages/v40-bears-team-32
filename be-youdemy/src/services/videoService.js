import Video from "../models/videoSchema.js";

// .exec(): 
//     - https://mongoosejs.com/docs/promises.html#queries-are-not-promises
//     - https://stackoverflow.com/a/66490355/12369650

const getAll = async () =>  await Video.find({}).exec();

const get = async id => await Video.findById(id).exec();

const getByUserId = async userId => await Video.findOne(userId).exec();

export default {
    get,
    getAll,
    getByUserId
}