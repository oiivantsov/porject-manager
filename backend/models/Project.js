const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  content: String
});

module.exports = mongoose.model('Project', projectSchema);
