import React, { useState } from 'react';
import { Search, Filter, Star } from 'lucide-react';

const CloneMarketplace: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Gaming', 'Lifestyle', 'Tech', 'Fashion', 'Fitness'];
  const clones = [
    { id: 1, name: 'TechGuru', category: 'Tech', rating: 4.8, price: 50 },
    { id: 2, name: 'FitnessPro', category: 'Fitness', rating: 4.5, price: 45 },
    { id: 3, name: 'GamerGirl', category: 'Gaming', rating: 4.9, price: 55 },
    { id: 4, name: 'FashionIcon', category: 'Fashion', rating: 4.7, price: 60 },
    { id: 5, name: 'LifestyleGuru', category: 'Lifestyle', rating: 4.6, price: 48 },
  ];

  const filteredClones = clones.filter(
    (clone) =>
      (selectedCategory === 'All' || clone.category === selectedCategory) &&
      clone.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Clone Streamer Marketplace</h2>
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div className="relative mb-4 md:mb-0 md:w-1/2">
          <input
            type="text"
            placeholder="Search clones..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" />
        </div>
        <div className="flex items-center">
          <Filter className="mr-2 text-gray-400" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClones.map((clone) => (
          <div key={clone.id} className="bg-gray-100 rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">{clone.name}</h3>
            <p className="text-sm text-gray-600 mb-2">Category: {clone.category}</p>
            <div className="flex items-center mb-2">
              <Star className="text-yellow-400 mr-1" />
              <span>{clone.rating.toFixed(1)}</span>
            </div>
            <p className="text-lg font-bold mb-4">${clone.price}/hour</p>
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Hire Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloneMarketplace;