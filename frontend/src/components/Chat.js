import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [username, setUsername] = useState('');
  const [argument1, setArgument1] = useState('');
  const [argument2, setArgument2] = useState('');
  const [solution, setSolution] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/mediate', {
        username,
        argument1,
        argument2,
      });
      setSolution(response.data.solution);
    } catch (error) {
      console.error("Error fetching the solution", error);
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title">Mediation Chat</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="argument1">Argument from Party 1</label>
            <textarea
              className="form-control"
              id="argument1"
              rows="3"
              value={argument1}
              onChange={(e) => setArgument1(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="argument2">Argument from Party 2</label>
            <textarea
              className="form-control"
              id="argument2"
              rows="3"
              value={argument2}
              onChange={(e) => setArgument2(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Mediate</button>
        </form>
        {solution && (
          <div className="alert alert-success mt-3">
            <strong>Suggested Solution:</strong> {solution}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;

