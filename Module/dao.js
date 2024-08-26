import model from "./model.js";
export const createModule = (module) => model.create(module);
export const findModuleForCourse = (cid) => model.find({ course: cid });
export const updateModule = (moduleId, module) => model.updateOne({ _id: moduleId }, { $set: module });
export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });