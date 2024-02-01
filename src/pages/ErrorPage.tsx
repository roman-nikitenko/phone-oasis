import React from 'react';

export const ErrorPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-orange-100">
      <h1 className="font-bold text-3xl">This page does not exist</h1>
    </div>
  );
};
