import React, { useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [mentors, setMentors] = useState([]);
  const [projects, setProjects] = useState([]);

  const fetchMentors = async () => {
    const response = await axios.get('/api/admin/mentors', {
      headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` },
    });
    setMentors(response.data);
  };

  const fetchProjects = async () => {
    const response = await axios.get('/api/admin/projects', {
      headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` },
    });
    setProjects(response.data);
  };

  const deleteMentor = async (id) => {
    await axios.delete(`/api/admin/mentors/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` },
    });
    fetchMentors();
  };

  const deleteProject = async (id) => {
    await axios.delete(`/api/admin/projects/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` },
    });
    fetchProjects();
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={fetchMentors}>Fetch Mentors</button>
      <button onClick={fetchProjects}>Fetch Projects</button>
      <h3>Mentors</h3>
      <ul>
        {mentors.map((mentor) => (
          <li key={mentor._id}>
            {mentor.name} <button onClick={() => deleteMentor(mentor._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h3>Projects</h3>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            {project.title} <button onClick={() => deleteProject(project._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;