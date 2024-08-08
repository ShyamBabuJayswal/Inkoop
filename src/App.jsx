import React from 'react';
import NumberInput from './component/NumberInput';
import Github from './component/Github';

function App() {
  return (
    <div className="flex items-center justify-center h-screen space-x-8">
      <NumberInput />
      <Github />
    </div>
  );
}

export default App;
