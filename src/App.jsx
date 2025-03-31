import React from 'react';
import Sidebar from './components/Sidebar';
import CandidateList from './components/CandidateList';

const App = () => {
  return (
    <div className="flex h-screen">
  
      <Sidebar />

     
      <div className="flex-1 p-4 ml-64 overflow-auto">
        <h1 className="text-3xl font-bold mb-4">Interviews</h1>
        <CandidateList />
      </div>
    </div>
  );
};

export default App;
