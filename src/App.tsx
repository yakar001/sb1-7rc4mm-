import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import LiveStreaming from './components/LiveStreaming';
import VideoEditing from './components/VideoEditing';
import VirtualInfluencer from './components/VirtualInfluencer';
import CloneMarketplace from './components/CloneMarketplace';
import Analytics from './components/Analytics';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/live-streaming" element={<LiveStreaming />} />
            <Route path="/video-editing" element={<VideoEditing />} />
            <Route path="/virtual-influencer" element={<VirtualInfluencer />} />
            <Route path="/clone-marketplace" element={<CloneMarketplace />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;