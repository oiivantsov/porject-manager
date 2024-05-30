const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/', async (req, res) => {
  const project = new Project({
    title: req.body.title,
    content: req.body.content
  });

  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.delete('/:id', async (req, res) => {
    try {
      const deletedProject = await Project.deleteOne({ _id: req.params.id });
      res.json(deletedProject);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

module.exports = router;
