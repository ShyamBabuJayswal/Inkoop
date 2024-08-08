import React from 'react';
import NumberInput from './component/NumberInput';

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <NumberInput />
      <a 
        href="https://github.com/your-username/your-repository"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 text-blue-500 hover:underline"
      >
        View on GitHub
      </a>
    </div>
  );
}

export default App;
