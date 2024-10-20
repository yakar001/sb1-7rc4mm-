import React, { useState } from 'react';
import { Upload, User, Mic, Video } from 'lucide-react';

const VirtualInfluencer: React.FC = () => {
  const [step, setStep] = useState(1);
  const [influencerName, setInfluencerName] = useState('');
  const [influencerDescription, setInfluencerDescription] = useState('');

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h3 className="text-lg font-semibold mb-2">Step 1: Basic Information</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Influencer Name</label>
              <input
                type="text"
                value={influencerName}
                onChange={(e) => setInfluencerName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter influencer name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={influencerDescription}
                onChange={(e) => setInfluencerDescription(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Describe your virtual influencer"
                rows={4}
              ></textarea>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h3 className="text-lg font-semibold mb-2">Step 2: Upload Materials</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <UploadBox icon={<User />} label="Profile Picture" />
              <UploadBox icon={<Mic />} label="Voice Samples" />
              <UploadBox icon={<Video />} label="Video Clips" />
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h3 className="text-lg font-semibold mb-2">Step 3: AI Generation</h3>
            <p className="text-gray-600 mb-4">Our AI is now processing your inputs to create your virtual influencer.</p>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-gray-600 mb-2">Generating {influencerName}...</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Create Virtual Influencer</h2>
      {renderStep()}
      <div className="mt-6 flex justify-between">
        {step > 1 && (
          <button
            onClick={handlePreviousStep}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
          >
            Previous
          </button>
        )}
        {step < 3 ? (
          <button
            onClick={handleNextStep}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Next
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

const UploadBox: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
    {icon}
    <p className="mt-2 text-sm text-gray-500">{label}</p>
    <button className="mt-2 px-3 py-1 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600">
      Upload
    </button>
  </div>
);

export default VirtualInfluencer;