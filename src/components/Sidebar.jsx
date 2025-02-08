import React from 'react';
import { Home, FileText, Activity, Settings, LogOut, User, Bell, Search, Plus } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-20 bg-gray-900 text-white flex flex-col items-center py-4 min-h-screen">
      <div className="mb-8">
        <h4 className='italic text-xl font-semibold text-yellow-500'>logo</h4>
      </div>
      <nav className="flex flex-col gap-6">
        <button className="p-2 hover:bg-gray-700 rounded-md">
          <Home size={24} />
        </button>
        <button className="p-2 hover:bg-gray-700 rounded-md">
          <FileText size={24} />
        </button>
        <button className="p-2 hover:bg-gray-700 rounded-md">
          <Activity size={24} />
        </button>
        <button className="p-2 hover:bg-gray-700 rounded-md">
          <Settings size={24} />
        </button>
        <button className="p-2 hover:bg-gray-700 rounded-md">
          <User size={24} />
        </button>
        <button className="p-2 hover:bg-gray-700 rounded-md">
          <Bell size={24} />
        </button>
        <button className="p-2 hover:bg-gray-700 rounded-md">
          <Search size={24} />
        </button>
        <button className="p-2 hover:bg-gray-700 rounded-md">
          <Plus size={24} />
        </button>
      </nav>
      <div className="mt-auto">
        <button className="p-2 hover:bg-gray-700 rounded-md">
          <LogOut size={24} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
