import { useState } from "react";
import axios from "axios";

function TeamForm() {
  const [name, setName] = useState("");
  const [leader, setLeader] = useState("");
  const [hackathonId, setHackathonId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const teamData = {
      name: name,
      leader: leader,
      hackathon: {
        id: Number(hackathonId),
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/team/create",
        teamData
      );

      console.log(response.data);
      alert("Team Created Successfully");

      setName("");
      setLeader("");
      setHackathonId("");
    } catch (error) {
      console.error(error);
      alert("Error creating team");
    }
  };

  return (
    <div className="card">
      <h2 className="section-title">Create Team</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-input"
            type="text"
            placeholder="Team Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="form-input"
            type="text"
            placeholder="Leader Name"
            value={leader}
            onChange={(e) => setLeader(e.target.value)}
          />

          <input
            className="form-input"
            type="number"
            placeholder="Hackathon ID"
            value={hackathonId}
            onChange={(e) => setHackathonId(e.target.value)}
          />
        </div>

        <button className="primary-btn" type="submit">
          Create Team
        </button>
      </form>
    </div>
  );
}

export default TeamForm;