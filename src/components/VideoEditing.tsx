import React, { useState } from 'react';
import { Upload, Edit, Save } from 'lucide-react';

const VideoEditing: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [editingMode, setEditingMode] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleEditingMode = (mode: string) => {
    setEditingMode(mode);
    // In a real application, this would trigger the AI-powered editing process
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">AI-Powered Video Editing</h2>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Upload Video</label>
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-10 h-10 mb-3 text-gray-400" />
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">MP4, MOV, or AVI (MAX. 800MB)</p>
            </div>
            <input type="file" className="hidden" onChange={handleFileChange} accept="video/*" />
          </label>
        </div>
      </div>
      {selectedFile && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Selected File: {selectedFile.name}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Lifestyle', 'Tech Review', 'Travel'].map((category) => (
              <button
                key={category}
                onClick={() => handleEditingMode(category)}
                className={`px-4 py-2 rounded-md ${
                  editingMode === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                } font-semibold`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
      {editingMode && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Editing in Progress</h3>
          <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-gray-600 mb-2">AI is optimizing your video for {editingMode} content.</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
            </div>
          </div>
          <button className="mt-4 flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            <Save className="mr-2" />
            Save Edited Video
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoEditing;