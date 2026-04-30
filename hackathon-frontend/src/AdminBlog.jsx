import { useState } from "react";
import axios from "axios";

function AdminBlog({ user }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createBlog = async () => {
    try {
      await axios.post(
        `http://localhost:8080/blog/create?role=${user.role}`,
        {
          title,
          content,
        }
      );

      alert("Blog created!");
      setTitle("");
      setContent("");
    } catch (error) {
      console.error(error);
      alert("Error creating blog");
    }
  };

  return (
    <div className="card">
      <h2 className="section-title">Create Blog (Admin)</h2>

      <div className="blog-form">
        <input
          className="form-input"
          placeholder="Blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="form-input blog-textarea"
          placeholder="Blog content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button className="primary-btn" onClick={createBlog}>
          Create Blog
        </button>
      </div>
    </div>
  );
}

export default AdminBlog;