import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
const Header = () => {
  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-md">
      <div className='flex items-center gap-4'>

      </div>
      <div className="flex items-center gap-4">
        <ContentPasteIcon />
        <h1 className="text-xl font-bold">Projects</h1>
        <div className="flex items-center bg-white-100 rounded-full px-4 py-2 shadow-sm border border-gray-300 focus-within:border-purple-500 transition duration-300 ease-in-out">
          <Search  className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none ml-2 text-sm placeholder-gray-500 w-100 focus:w-64 transition-all duration-300"
          />
        </div>

      </div>


      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <LanguageIcon />
          <p>En</p>
          <ArrowDropDownIcon />
        </div>
        <div className="p-0 hover:bg-gray-200 rounded-md">
          <SettingsIcon />
        </div>
        <div className="flex items-center gap-1 p-2 hover:bg-gray-200 bg-purple-500 text-white px-4 py-2 rounded-full">
          <span>Add</span>
          <AddIcon />
        </div>

        <div className="flex items-center gap-4">
          <div className='w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-2'  >
            <User style={{ fontSize: '28px', color: '#333' }} />

          </div>
          <div>
            <p className="font-semibold">Michael Nyoman</p>
            <p className="text-gray-500 text-sm">michael77@email.com</p>

          </div>
          <ArrowDropDownIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;