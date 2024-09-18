const mongoose = require('mongoose');

// Define Task schema
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },      // Task title (required)
  description: { type: String },                // Task description (optional)
  status: { type: String, default: 'pending' }, // Task status (default: 'pending')
  date: { type: Date, default: Date.now },      // Task creation date (default: current date)
});

// Export the Task model
module.exports = mongoose.model('Task', taskSchema);
