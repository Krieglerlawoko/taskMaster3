import axios from 'axios';

// Define the base API URL
const API_URL = 'http://localhost:5000/api/tasks';

/**
 * Fetch all tasks from the server.
 */
export const getTasks = () => axios.get(API_URL);

/**
 * Create a new task by sending a POST request to the server.
 * @param {Object} task - The task data to create (e.g., { title, description }).
 */
export const createTask = (task) => axios.post(API_URL, task);

/**
 * Update an existing task by sending a PUT request to the server.
 * @param {string} id - The ID of the task to update.
 * @param {Object} task - The updated task data.
 */
export const updateTask = (id, task) => axios.put(`${API_URL}/${id}`, task);

/**
 * Delete a task by sending a DELETE request to the server.
 * @param {string} id - The ID of the task to delete.
 */
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);
