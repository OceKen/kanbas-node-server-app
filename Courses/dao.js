import model from "./model.js";
export const createCourse = (course) => model.create(course);
export const fetchAllCourses = () => model.find();
export const updateCourse = (cid, course) => model.updateOne({ _id: cid }, { $set: course });
export const deleteCourse = (cid) => model.deleteOne({ _id: cid });
