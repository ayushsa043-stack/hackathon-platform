import { useEffect, useState } from "react";
import axios from "axios";

function TeamList({ currentUser, user }) {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const response = await axios.get("http://localhost:8080/team");
      setTeams(response.data);
    } catch (error) {
      console.error("Error fetching teams", error);
    }
  };

  const acceptRequest = async (teamId, userName) => {
    try {
      await axios.put(
        `http://localhost:8080/team/accept/${teamId}?userName=${userName}`
      );
      alert("User Accepted");
      fetchTeams();
    } catch (error) {
      console.error("Error accepting request", error);
    }
  };

  const joinTeam = async (teamId) => {
    try {
      await axios.put(
        `http://localhost:8080/team/request/${teamId}?userName=${currentUser}`
      );
      fetchTeams();
    } catch (error) {
      console.error("Error joining team", error);
    }
  };

  // ✅ DELETE FUNCTION
  const deleteTeam = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/team/delete/${id}`);
      alert("Team deleted successfully");
      fetchTeams();
    } catch (error) {
      console.error("Error deleting team", error);
      alert("Error deleting team");
    }
  };

  return (
    <div className="card">
      <h2 className="section-title">All Teams</h2>

      {teams.length === 0 ? (
        <p>No teams available</p>
      ) : (
        teams.map((team) => (
          <div key={team.id} className="team-card">
            <h3 className="team-title">{team.name}</h3>

            <p>Leader: {team.leader}</p>
            <p>Hackathon ID: {team.hackathon?.id}</p>

            {team.members.length < 4 && (
              <button
                className="secondary-btn"
                onClick={() => joinTeam(team.id)}
              >
                Join Team
              </button>
            )}

            {/* ✅ ADMIN DELETE BUTTON */}
            {user?.role === "ADMIN" && (
              <button
                style={{ marginLeft: "10px", background: "red", color: "white" }}
                onClick={() => deleteTeam(team.id)}
              >
                Delete Team
              </button>
            )}

            <p style={{ marginTop: "12px", fontWeight: "600" }}>Members:</p>
            <ul>
              {team.members && team.members.length > 0 ? (
                team.members.map((member, index) => (
                  <li key={index}>{member}</li>
                ))
              ) : (
                <li>No members yet</li>
              )}
            </ul>

            <p style={{ marginTop: "12px", fontWeight: "600" }}>
              Pending Requests:
            </p>
            <ul>
              {team.pendingRequests && team.pendingRequests.length > 0 ? (
                team.pendingRequests.map((req, index) => (
                  <li key={index}>
                    {req}{" "}
                    {team.leader === currentUser && (
                      <button
                        className="secondary-btn"
                        style={{ marginLeft: "10px" }}
                        onClick={() => acceptRequest(team.id, req)}
                      >
                        Accept
                      </button>
                    )}
                  </li>
                ))
              ) : (
                <li>No pending requests</li>
              )}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default TeamList;