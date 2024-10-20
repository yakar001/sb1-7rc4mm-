import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const Login: React.FC = () => {
  const [platform, setPlatform] = useState<string>('');
  const [qrCode, setQRCode] = useState<string>('');

  const handleLogin = (selectedPlatform: string) => {
    setPlatform(selectedPlatform);
    // In a real application, we would generate a unique QR code for each platform
    setQRCode(`https://example.com/auth/${selectedPlatform}`);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Login</div>
          <p className="mt-2 text-gray-500">Select a platform to login:</p>
          <div className="mt-4 space-y-2">
            {['TikTok', 'Instagram', 'YouTube'].map((p) => (
              <button
                key={p}
                onClick={() => handleLogin(p)}
                className="block w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {p}
              </button>
            ))}
          </div>
          {qrCode && (
            <div className="mt-6">
              <p className="text-sm text-gray-600 mb-2">Scan this QR code to login to {platform}:</p>
              <QRCodeSVG value={qrCode} size={200} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;