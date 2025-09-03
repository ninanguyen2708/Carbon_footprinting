import React from 'react';
import { useAutoUpload } from './hooks/useAutoUpload';

export default function App() {
  const { uploadStatus, error } = useAutoUpload();

  // Optional: Hiển thị status cho user
  const renderUploadStatus = () => {
    switch (uploadStatus) {
      case 'checking':
        return <div className="upload-status">Checking database...</div>;
      case 'uploading':
        return <div className="upload-status">Initializing database...</div>;
      case 'completed':
        return <div className="upload-status success">Database ready!</div>;
      case 'error':
        return <div className="upload-status error">Error: {error}</div>;
      case 'skipped':
        return null; // Không hiển thị gì
      default:
        return null;
    }
  };

  return (
    <div>
      {renderUploadStatus()}
      {/* Rest of your app */}
    </div>
  );
}