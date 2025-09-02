'use client';

import { useEffect, useState } from 'react';

const langMessages = [
  "Switching language matrix...",
  "Translating thoughts...", 
  "Loading linguistic modules...",
  "Parsing cultural context...",
  "Syncing babel.js...",
  "Updating interface.lang..."
];

export default function LanguageLoader() {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % langMessages.length);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
      <div className="bg-gray-900 rounded-lg border border-gray-700 p-6 max-w-sm mx-4">
        <div className="text-center">
          {/* Mini Terminal */}
          <div className="bg-gray-800 rounded-t p-2 -mx-6 -mt-6 mb-4">
            <div className="flex justify-center space-x-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="font-mono text-sm">
            <div className="text-blue-400 mb-3">
              → {langMessages[messageIndex]}
            </div>
            
            {/* Loading dots */}
            <div className="flex justify-center space-x-1 mb-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            
            <div className="text-gray-400 text-xs">
              <span className="animate-pulse">⚡</span> Optimizing experience...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
