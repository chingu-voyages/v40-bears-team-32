import UserService from "./user.service.js";

const getById = async (req, res) => {
  const id = req.params.id;

  if (!id) return res.status(400).json({ error: "Missing Id" });

  const user = await UserService.getById(id);

  return res.status(200).json(user);
};

const getAllInstructors = async (req, res) => {
  const students = await UserService.getAllInstructors();

  return res.status(200).json(students);
};

export default {
  getById,
  getAllInstructors,
};
