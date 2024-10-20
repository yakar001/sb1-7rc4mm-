import React, { useState } from 'react';
import { Play, Pause, Settings } from 'lucide-react';

const LiveStreaming: React.FC = () => {
  const [isLive, setIsLive] = useState(false);
  const [platforms, setPlatforms] = useState({
    tiktok: true,
    instagram: true,
    youtube: true,
  });

  const toggleLiveStream = () => {
    setIsLive(!isLive);
  };

  const togglePlatform = (platform: keyof typeof platforms) => {
    setPlatforms({ ...platforms, [platform]: !platforms[platform] });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Live Streaming Dashboard</h2>
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={toggleLiveStream}
          className={`px-4 py-2 rounded-md ${
            isLive ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
          } text-white font-semibold flex items-center`}
        >
          {isLive ? <Pause className="mr-2" /> : <Play className="mr-2" />}
          {isLive ? 'End Stream' : 'Go Live'}
        </button>
        <div className="flex space-x-4">
          {Object.entries(platforms).map(([platform, isActive]) => (
            <button
              key={platform}
              onClick={() => togglePlatform(platform as keyof typeof platforms)}
              className={`px-3 py-1 rounded-md ${
                isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              } font-semibold`}
            >
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Stream Preview</h3>
          <div className="aspect-video bg-gray-300 rounded-md flex items-center justify-center">
            {isLive ? (
              <span className="text-red-500 font-bold">LIVE</span>
            ) : (
              <span className="text-gray-500">Preview not available</span>
            )}
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Chat</h3>
          <div className="h-48 overflow-y-auto bg-white p-2 rounded-md">
            {/* Chat messages would go here */}
            <p className="text-gray-500">No messages yet</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Stream Settings</h3>
        <button className="flex items-center px-3 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
          <Settings className="mr-2" />
          Configure Stream
        </button>
      </div>
    </div>
  );
};

export default LiveStreaming;