import React from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import PersonIcon from '@mui/icons-material/Person';
import Dribbble from './Dribble';

const tasks = [
  { title: 'Design News UI Presentation', progress: '10/21', date: 'Jul 15, 2024' },
  { title: 'Theme Development', progress: '22/51', date: 'Jul 15, 2024' },
  { title: 'Dropbox App Design', progress: '63/73', date: 'Jul 15, 2024' },
  { title: 'Create New Wireframe', progress: '97/100', date: 'Aug 22, 2024' },
  { title: 'Social Media Promotion', progress: '22/27', date: 'Apr 5, 2024' },
  { title: 'Add Product In Market', progress: '10/21', date: 'May 8, 2024' },
  { title: 'Run And Manage Campaign', progress: '21/21', date: 'Feb 11, 2024' },
  { title: 'Launch Product Promotion', progress: '24/24', date: 'Jul 15, 2024' }
];

const MainContent = () => {

  const totalProgress = tasks.reduce(
    (acc, task) => {
      const [completed, total] = task.progress.split('/').map(Number);
      acc.completed += completed;
      acc.total += total;
      return acc;
    },
    { completed: 0, total: 0 }
  );

  const overallPercentage = ((totalProgress.completed / totalProgress.total) * 100).toFixed(1); 

  return (
    <div className="flex font-sans bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-white p-6 ">
        <div>
          <p className="text-gray-400 font-bold ">Project</p>
          <h2 className="text-2xl font-bold mb-8 text-black">Dribbble Website</h2>
          <p className="text-black font-bold mb-3">Description</p>
          <p className="text-gray-600 text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Architecto, dignissimos voluptas possimus asperiores odio praesentium dolores 
            <br />
            <br /> quasi eius laborum incidunt corrupti quaerat provident velit cumque consequatur illo quidem expedita voluptatum ipsam laudantium ab necessitatibus!
          </p>
        </div>

        <div className="mb-4">
          <p className="text-gray-700 font-bold mb-3">Due Date:</p>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              defaultValue={dayjs('2024-04-17')}
              slotProps={{
                textField: {
                  variant: 'outlined',
                  fullWidth: true,
                  sx: {
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '9999px', // Fully rounded
                      padding: '0px 20px 0px 0px',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#d1d5db', // Light gray border
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#a78bfa', // Purple on hover
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#8b5cf6', // Purple on focus
                      borderWidth: '2px',
                    },
                  },
                },
              }}
            />
          </LocalizationProvider>
        </div>

        {/* Team Avatars */}
        <div>
          <p className="text-gray-700 font-bold mb-3">Assign To</p>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center border-2 border-white ${i !== 0 ? '-ml-3' : ''
                  }`}
              >
                <PersonIcon style={{ fontSize: '28px', color: '#4B5563' }} />
              </div>
            ))}

            {/* ✅ Overlapping +5 Icon */}
            <div className="-ml-3 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center border-2 border-white text-sm font-bold">
              +5
            </div>
          </div>
        </div>


        {/* Overall Progress with Percentage */}
        <div className="mt-6">
          {/* Row for Label & Percentage */}
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-700 font-bold">Overall Progress</p>
            <span className="text-sm font-semibold text-gray-700">{overallPercentage}%</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 h-3 rounded-full">
            <div
              className="bg-purple-500 h-3 rounded-full"
              style={{ width: `${overallPercentage}%` }}
            ></div>
          </div>
        </div>


      </div>

      {/* Main Content Area */}
      <div className="w-4/5 bg-gray-100 p-6">
        <Dribbble />
      </div>
    </div>
  );
};

export default MainContent;
