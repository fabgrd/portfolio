'use client';

import { useEffect, useState } from 'react';

const devMessages = [
  "Initializing portfolio.exe...",
  "Loading creative.modules...",
  "Compiling coffee into code...",
  "Debugging life.js...",
  "Installing creativity.dll...",
  "Optimizing user.experience...",
  "Fetching awesome.projects...",
  "Mounting React.components...",
  "Parsing developer.dreams...",
  "Building digital.magic...",
  "Syncing with Matrix...",
  "Charging flux capacitor...",
  "Calibrating pixel perfection...",
  "Loading next-gen.solutions...",
  "Connecting to caffeine.api...",
  "Booting imagination.engine...",
];

export default function LoadingSpinner() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [dots, setDots] = useState('');

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % devMessages.length);
    }, 2000); 

    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 600);

    return () => {
      clearInterval(messageInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-primary-dark flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        {/* Terminal Window */}
        <div className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-2 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 text-center text-gray-400 text-sm font-mono">
              fabien@portfolio:~$
            </div>
          </div>
          
          {/* Terminal Content */}
          <div className="p-6 font-mono text-left">
            <div className="text-green-400 mb-4">
              <span className="text-gray-500">$</span> npm start
            </div>
            
            {/* Loading Animation */}
            <div className="space-y-2 mb-4">
              <div className="text-blue-400">
                → {devMessages[messageIndex]}{dots}
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-yellow-400">⚡</div>
                <div className="flex-1 bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full animate-pulse" 
                       style={{ width: `${((messageIndex + 1) / devMessages.length) * 100}%` }}>
                  </div>
                </div>
                <div className="text-gray-400 text-sm">
                  {Math.round(((messageIndex + 1) / devMessages.length) * 100)}%
                </div>
              </div>
            </div>
            
            {/* ASCII Art */}
            <div className="text-primary-light text-xs leading-tight">
              <pre>{`
    ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    █░░░░░░░░░░░░░░░░░░░░░░░░░█
    █░ ╔═══╗╔═══╗╔═══╗╔═══╗ ░█
    █░ ║ C ║║ O ║║ D ║║ E ║ ░█
    █░ ╚═══╝╚═══╝╚═══╝╚═══╝ ░█
    █░░░░░░░░░░░░░░░░░░░░░░░░░█
    ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
              `}</pre>
            </div>
            
            <div className="text-gray-500 text-xs mt-4">
              <span className="animate-pulse">█</span> Ready when you are...
            </div>
          </div>
        </div>
        
        {/* Fun subtitle */}
        <div className="mt-4 text-gray-400 text-sm">
          <span className="animate-pulse">🚀</span> Powered by coffee & late-night coding sessions
        </div>
      </div>
    </div>
  );
}
