// src/components/Loading.tsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const Loading: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 3000); // Simulate a 3-second loading delay
    return () => clearTimeout(timer);
  }, [location, navigationType]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75">
      <div className="w-24 h-24 border-8 border-t-8 border-gray-500 border-t-green-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
