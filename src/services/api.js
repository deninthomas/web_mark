import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Get the token from localStorage
const getToken = () => localStorage.getItem('token');

// Fetch all projects
export const getProjects = async () => {
  const token = getToken();
  const response = await axios.get(`${API_URL}/admin/projects`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.projects;
};

// Fetch all mentors
export const getMentors = async () => {
  const token = getToken();
  const response = await axios.get(`${API_URL}/admin/mentors`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.mentors;
};

// Login request (Admin or Mentor)
export const login = async (email, password, role) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  const { token } = response.data;
  localStorage.setItem('token', token);
  localStorage.setItem('role', role);
  return token;
};

// Create a new project
export const createProject = async (title, description) => {
  const token = getToken();
  const response = await axios.post(`${API_URL}/admin/create-project`, { title, description }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.project;
};

// Assign project to mentor
export const assignProject = async (projectId, mentorId) => {
  const token = getToken();
  const response = await axios.post(`${API_URL}/admin/assign-project`, { projectId, mentorId }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.message;
};

// Update project status
export const updateStatus = async (projectId, status) => {
  const token = getToken();
  const response = await axios.put(`${API_URL}/admin/update-status`, { projectId, status }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.message;
};

// Mentor update submission status
export const updateSubmission = async (projectId, status) => {
  const token = getToken();
  const response = await axios.put(`${API_URL}/mentor/update-submission`, { projectId, status }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.message;
};
