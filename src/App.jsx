import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';

const App = () => (
  <div className="flex h-screen overflow-hidden">
    <Sidebar className="fixed top-0 left-0 h-full w-20 bg-white shadow-md z-20" />
    <div className="flex-1 flex flex-col">
      <Header className="fixed top-0 left-20 right-0 h-16 bg-gray-100 shadow-sm z-10" />
      <div className="overflow-y-auto h-[calc(100vh-4rem)] bg-gray-50">
        <MainContent />
      </div>
    </div>
  </div>
);

export default App;
