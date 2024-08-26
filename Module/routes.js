import * as dao from "./dao.js";
export default function ModuleRoutes(app) {
    const createModule = async (req, res) => {
        const module = await dao.createModule(req.body);
        res.json(module);
    }; 
    app.post("/api/courses/:cid/module", createModule);

    const deleteModule = async (req, res) => {
        const status = await dao.deleteModule(req.params.mid);
        res.json(status);
    };
    app.delete("/api/module/:mid", deleteModule);

    const findModuleForCourse = async (req, res) => {
        const { cid } = req.params;
        const modules = await dao.findModuleForCourse(cid);
        res.json(modules);
    };
    app.get("/api/courses/:cid/module", findModuleForCourse);
    
    const updateModule = async (req, res) => {
        const { mid } = req.params;
        const status = await dao.updateModule(mid, req.body);
        res.json(status);
    };
    app.put("/api/module/:mid", updateModule);
}
