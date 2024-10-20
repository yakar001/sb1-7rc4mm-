import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Edit, Users, ShoppingBag, BarChart2 } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <DashboardCard
        title="Live Streaming"
        description="Manage your live streams across multiple platforms"
        icon={<Video className="h-8 w-8 text-blue-500" />}
        link="/live-streaming"
      />
      <DashboardCard
        title="Video Editing"
        description="AI-powered video editing for short-form content"
        icon={<Edit className="h-8 w-8 text-green-500" />}
        link="/video-editing"
      />
      <DashboardCard
        title="Virtual Influencer"
        description="Create AI-powered virtual influencers"
        icon={<Users className="h-8 w-8 text-purple-500" />}
        link="/virtual-influencer"
      />
      <DashboardCard
        title="Clone Marketplace"
        description="Hire AI-cloned streamers for your projects"
        icon={<ShoppingBag className="h-8 w-8 text-red-500" />}
        link="/clone-marketplace"
      />
      <DashboardCard
        title="Analytics"
        description="Track performance and manage earnings"
        icon={<BarChart2 className="h-8 w-8 text-yellow-500" />}
        link="/analytics"
      />
    </div>
  );
};

interface DashboardCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, description, icon, link }) => {
  return (
    <Link to={link} className="block">
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
        <div className="flex items-center mb-4">
          {icon}
          <h3 className="ml-3 text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default Dashboard;