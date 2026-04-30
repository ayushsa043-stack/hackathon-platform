import { useEffect, useState } from "react";
import axios from "axios";

function Blog({ user }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:8080/blog");
      setBlogs(res.data);
    } catch (error) {
      console.error("Error fetching blogs", error);
    }
  };

  const updateBlog = async (id) => {
    const newTitle = prompt("Enter new title");
    const newContent = prompt("Enter new content");

    if (!newTitle || !newContent) return;

    try {
      await axios.put(
  `http://localhost:8080/blog/update/${id}?role=${user.role}`,
  {
    title: newTitle,
    content: newContent,
  }
);

      alert("Blog updated!");
      fetchBlogs();

    } catch (error) {
      console.error(error);
      alert("Error updating blog");
    }
  };

  return (
    <div>
      <h2>Blog</h2>

      {blogs.map((blog) => (
        <div key={blog.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>

          {user?.role === "ADMIN" && (
            <button onClick={() => updateBlog(blog.id)}>
              Update
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Blog;