import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [history, setHistory] = useState([]);

  const fetchProfile = async () => {
    if (username) {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/profiles/${username}`);
        setHistory(response.data.history);
      } catch (error) {
        console.error("Error fetching user profile", error);
      }
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [username]);

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">User Profile</h2>
        <div className="form-group">
          <label htmlFor="username">Enter your Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {history.length > 0 && (
          <div className="mt-3">
            <h3>Mediation History:</h3>
            <ul className="list-group">
              {history.map((mediation, index) => (
                <li key={index} className="list-group-item">
                  <strong>Argument 1:</strong> {mediation.argument1} <br />
                  <strong>Argument 2:</strong> {mediation.argument2} <br />
                  <strong>Solution:</strong> {mediation.solution} <br />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

