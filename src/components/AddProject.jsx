import React, { useState } from "react";
import axios from "axios";

const AddProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mentorId, setMentorId] = useState("");

  const handleAddProject = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/admin/projects",
        { title, description, mentorId },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
      console.log("Project added:", response.data);
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  return (
    <div className="add-project">
      <h2>Add Project</h2>
      <form onSubmit={handleAddProject}>
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Mentor ID"
          value={mentorId}
          onChange={(e) => setMentorId(e.target.value)}
        />
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default AddProject;
