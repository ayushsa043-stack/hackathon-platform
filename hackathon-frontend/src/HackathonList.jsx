import "./HackathonList.css";

import { useEffect, useState } from "react";
import axios from "axios";

function HackathonList({ user }) {
  const [hackathons, setHackathons] = useState([]);

  const [newHackathon, setNewHackathon] = useState({
    title: "",
    theme: "",
    date: "",
    deadline: "",
    description: "",
  });

  useEffect(() => {
    fetchHackathons();
  }, []);

  const fetchHackathons = async () => {
    try {
      const response = await axios.get("http://localhost:8080/hackathon/all");
      setHackathons(response.data);
    } catch (error) {
      console.error("Error fetching hackathons", error);
    }
  };

  const handleChange = (e) => {
    setNewHackathon({
      ...newHackathon,
      [e.target.name]: e.target.value,
    });
  };

  const createHackathon = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/hackathon/create", newHackathon);

      alert("Hackathon created successfully");

      setNewHackathon({
        title: "",
        theme: "",
        date: "",
        deadline: "",
        description: "",
      });

      fetchHackathons();
    } catch (error) {
      console.error("Error creating hackathon", error);
      alert("Error creating hackathon");
    }
  };

  const deleteHackathon = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/hackathon/delete/${id}`);

      alert("Hackathon deleted successfully");

      fetchHackathons();
    } catch (error) {
      console.error("Error deleting hackathon", error);
      alert("Error deleting hackathon");
    }
  };

  return (
    <div className="card">
      {user?.role === "ADMIN" && (
        <div className="hackathon-form-card">
          <h2 className="section-title">Create Hackathon</h2>

          <form onSubmit={createHackathon} className="hackathon-form">
            <input
              type="text"
              name="title"
              placeholder="Hackathon Title"
              value={newHackathon.title}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="theme"
              placeholder="Theme"
              value={newHackathon.theme}
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="date"
              value={newHackathon.date}
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="deadline"
              value={newHackathon.deadline}
              onChange={handleChange}
              required
            />

            <textarea
              name="description"
              placeholder="Description"
              value={newHackathon.description}
              onChange={handleChange}
              required
            />

            <button type="submit">Add Hackathon</button>
          </form>
        </div>
      )}

      <h2 className="section-title">Upcoming Hackathons</h2>

      {hackathons.length === 0 ? (
        <p>No hackathons available</p>
      ) : (
        hackathons.map((h) => (
          <div key={h.id} className="hackathon-card">
            <h3 className="team-title">{h.title}</h3>

            <p>
              <strong>Theme:</strong> {h.theme}
            </p>
            <p>
              <strong>Date:</strong> {h.date}
            </p>
            <p>
              <strong>Deadline:</strong> {h.deadline}
            </p>
            <p>{h.description}</p>

            {user?.role === "ADMIN" && (
              <button onClick={() => deleteHackathon(h.id)}>
                Delete Hackathon
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default HackathonList;