import React from 'react';
import { CatIcon } from '@heroicons/react/24/outline';
import config from '../constants.js';

const LandingPage = ({ onLogin }) => {
  return (
    <div className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gray-50 pattern-bg opacity-40"></div>
      <div className="relative z-10 max-w-2xl mx-auto text-center px-4">
        <div className="flex justify-center mb-6">
          <div className="bg-indigo-600 p-4 rounded-full">
            <CatIcon className="h-10 w-10 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Welcome to <span className="text-indigo-600">Purrfect Eats</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto">
          Discover, track, and review the best cat food for your feline friend. Share your experiences and find the healthiest options available.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => onLogin('user@manifest.build', 'password')}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            Try Demo
          </button>
          <a 
            href={`${config.BACKEND_URL}/admin`} 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            Admin Panel
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
