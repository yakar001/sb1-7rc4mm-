import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DollarSign, Users, ThumbsUp, Eye } from 'lucide-react';

const Analytics: React.FC = () => {
  const performanceData = [
    { platform: 'TikTok', views: 1500000, likes: 250000, followers: 50000, earnings: 3000 },
    { platform: 'Instagram', views: 1000000, likes: 180000, followers: 40000, earnings: 2500 },
    { platform: 'YouTube', views: 800000, likes: 100000, followers: 30000, earnings: 2000 },
  ];

  const StatCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
        <div className="bg-blue-100 p-3 rounded-full">{icon}</div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Analytics Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard title="Total Views" value="3.3M" icon={<Eye className="text-blue-500" />} />
        <StatCard title="Total Likes" value="530K" icon={<ThumbsUp className="text-green-500" />} />
        <StatCard title="Total Followers" value="120K" icon={<Users className="text-purple-500" />} />
        <StatCard title="Total Earnings" value="$7,500" icon={<DollarSign className="text-yellow-500" />} />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Performance by Platform</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="platform" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="views" fill="#3b82f6" name="Views" />
            <Bar yAxisId="left" dataKey="likes" fill="#10b981" name="Likes" />
            <Bar yAxisId="left" dataKey="followers" fill="#8b5cf6" name="Followers" />
            <Bar yAxisId="right" dataKey="earnings" fill="#f59e0b" name="Earnings ($)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;