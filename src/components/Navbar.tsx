import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Video, Edit, Users, ShoppingBag, BarChart2 } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <Home className="h-8 w-8 mr-2 text-blue-500" />
                <span className="font-semibold text-gray-500 text-lg">Social Media Plugin</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/live-streaming" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">
              <Video className="h-5 w-5 inline-block mr-1" /> Live Streaming
            </Link>
            <Link to="/video-editing" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">
              <Edit className="h-5 w-5 inline-block mr-1" /> Video Editing
            </Link>
            <Link to="/virtual-influencer" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">
              <Users className="h-5 w-5 inline-block mr-1" /> Virtual Influencer
            </Link>
            <Link to="/clone-marketplace" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">
              <ShoppingBag className="h-5 w-5 inline-block mr-1" /> Clone Marketplace
            </Link>
            <Link to="/analytics" className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">
              <BarChart2 className="h-5 w-5 inline-block mr-1" /> Analytics
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;