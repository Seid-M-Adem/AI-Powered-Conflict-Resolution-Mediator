import React from 'react';
import Chat from './components/Chat';
import Profile from './components/Profile';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">AI-Powered Conflict Resolution Mediator</h1>
      <Chat />
      <Profile />
    </div>
  );
}

export default App;

