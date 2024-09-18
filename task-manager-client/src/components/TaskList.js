import React, { useState, useEffect } from 'react';
import { getTasks, createTask, deleteTask } from '../api/tasks';

const TaskList = () => {
  const [tasks, setTasks] = useState([]); // State to hold the list of tasks
  const [newTask, setNewTask] = useState({ title: '', description: '' }); // State for the new task

  // Fetch tasks when the component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  // Fetch all tasks from the server
  const fetchTasks = async () => {
    try {
      const { data } = await getTasks();
      setTasks(data); // Set the tasks in the state
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Create a new task and refresh the task list
  const handleCreateTask = async () => {
    try {
      await createTask(newTask);
      setNewTask({ title: '', description: '' }); // Clear input fields
      fetchTasks(); // Refresh the task list
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  // Delete a task by its ID and refresh the task list
  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      fetchTasks(); // Refresh the task list
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div>
      <h2>Task Manager</h2>

      {/* Input fields for creating a new task */}
      <input
        type="text"
        placeholder="Title"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={newTask.description}
        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
      />
      <button onClick={handleCreateTask}>Add Task</button>

      {/* List of tasks */}
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
