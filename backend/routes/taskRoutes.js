const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/', taskController.createTask);
router.get('/:projectId', taskController.getProjectTasks);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
