import React, { useState } from 'react';
import axios from 'axios';

function MentorDashboard() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const response = await axios.get('/api/mentor/projects', {
      headers: { Authorization: `Bearer ${localStorage.getItem('mentorToken')}` },
    });
    setProjects(response.data);
  };

  const editSubmission = async (projectId, submissionId, updates) => {
    await axios.put('/api/mentor/projects/submission', { projectId, submissionId, ...updates }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('mentorToken')}` },
    });
    fetchProjects();
  };

  return (
    <div>
      <h2>Mentor Dashboard</h2>
      <button onClick={fetchProjects}>Fetch Projects</button>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            {project.title}
            <ul>
              {project.submissions.map((submission) => (
                <li key={submission._id}>
                  {submission.studentName} - {submission.status}
                  <button onClick={() => editSubmission(project._id, submission._id, { status: 'Completed' })}>
                    Mark as Completed
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MentorDashboard;