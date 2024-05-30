const Project = require('../models/Project');
const Task = require('../models/Task');

// new project
exports.createProject = async (req, res) => {
  const { title, description, createdBy } = req.body;
  const project = new Project({ title, description, createdBy, members: [createdBy] });
  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// all user's projects
exports.getUserProjects = async (req, res) => {
  try {
    const projects = await Project.find({ members: req.user._id });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// delete project
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    await Task.deleteMany({ projectId: project._id });
    await project.remove();
    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
