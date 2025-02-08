import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PersonIcon from '@mui/icons-material/Person';

const tasks = {
    todo: [
        { title: 'Design New UI Presentation', progress: '10/21', date: 'Jul 15, 2024', updates: 2, comments: 6 },
        { title: 'Theme Development', progress: '22/51', date: 'Jul 15, 2024', updates: 1, comments: 4 },
        { title: 'Dropbox App Design', progress: '63/73', date: 'Jul 15, 2024', updates: 3, comments: 8 }
    ],
    inProgress: [
        { title: 'Create New Wireframe', progress: '97/100', date: 'Aug 22, 2024', updates: 4, comments: 7 },
        { title: 'Social Media Promotion', progress: '22/27', date: 'Apr 5, 2024', updates: 1, comments: 3 }
    ],
    done: [
        { title: 'Add Product In Market', progress: '10/21', date: 'May 8, 2024', updates: 0, comments: 2 },
        { title: 'Run And Manage Campaign', progress: '21/21', date: 'Feb 11, 2024', updates: 2, comments: 5 },
        { title: 'Launch Product Promotion', progress: '24/24', date: 'Jul 15, 2024', updates: 1, comments: 4 }
    ]
};

const Dribbble = () => {
    const getProgressColor = (percentage) => {
        if (percentage <= 25) return 'bg-red-400';
        if (percentage <= 50) return 'bg-yellow-400';
        if (percentage <= 75) return 'bg-blue-400';
        return 'bg-green-300';
    };

    const renderTasks = (taskList) => (
        taskList.map((task, index) => {
            const [completed, total] = task.progress.split('/').map(Number);
            const percentage = (completed / total) * 100;

            return (
                <div key={index} className="bg-white p-4 rounded-xl shadow-lg border border-gray-200 mb-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{task.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">Dribbble Presentation</p>

                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span className='text-gray-400 font-semibold'>Progress</span>
                        <span className='text-black font-semibold'>{task.progress}</span>
                    </div>

                    <div className="w-full bg-gray-200 h-2 rounded-full mb-2">
                        <div
                            className={`h-2 rounded-full ${getProgressColor(percentage)}`}
                            style={{ width: `${percentage}%` }}
                        ></div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-700 font-bold mb-3">Assign To</p>
                            <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center border-2 border-white ${i !== 0 ? '-ml-3' : ''}`}
                                    >
                                        <PersonIcon style={{ fontSize: '28px', color: '#4B5563' }} />
                                    </div>
                                ))}
                                <div className="-ml-3 w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center border-2 border-white text-sm font-bold">
                                    +5
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center rounded-md">
                        <div>
                            <button className="text-sm font-semibold text-gray-700 text-sm bg-gray-200 rounded-full px-3 py-1">
                                {task.date}
                            </button>
                        </div>
                        <div className="flex space-x-4 items-center">
                            <span className="flex items-center rounded-md text-gray-600">
                                &#x21bb; <span>{task.updates || 0}</span>
                            </span>
                            <span className="flex items-center rounded-md text-gray-600">
                                &#x1F4AC; <span>{task.comments || 0}</span>
                            </span>
                        </div>
                    </div>
                </div>
            );
        })
    );

    return (
        <div className="p-4 rounded-xl bg-gray-50 shadow-2xl">
            <div className="flex justify-between items-center mt-2 mb-4">
                <div className="flex items-center space-x-2">
                    <p className="text-gray-400 font-bold">Projects</p>
                    <ArrowForwardIosIcon fontSize="small" className="text-black" />
                    <p className="text-black font-bold">Dribbble Website</p>
                </div>

                <button className="flex items-center space-x-1 bg-white shadow-xl px-3 py-1 rounded-full">
                    <ArrowBackIcon className="text-black mr-3" />
                    <span className="text-black text-md font-semibold ">Back</span>
                </button>
            </div>

            <div className="flex space-x-4 mb-8">
                {['TASK', 'DESK', 'ACTIVITY', 'FILES', 'REPORTS', 'SETTINGS'].map((tab, idx) => (
                    <button
                        key={idx}
                        className={`px-4 py-2 rounded-full font-bold ${tab === 'DESK' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-purple-400 hover:text-white transition duration-300`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="shadow-xl p-4 rounded-2xl bg-white">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="font-bold text-xl  text-gray-400 tracking-wide"> To Do</h2>

                        <button className="flex items-center gap-2 text-purple-500  px-4 py-2 font-bold  ">
                            <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">+</span>
                            ADD NEW TASK
                        </button>
                    </div>

                    {renderTasks(tasks.todo)}
                </div>

                <div className="shadow-xl p-4 rounded-2xl bg-white">
                    <div className="flex justify-between mb-6">
                        <h2 className="font-bold text-lg mb-2 text-gray-400">In Progress</h2>
                        <button className="flex items-center gap-2 text-purple-500  px-4 py-2 font-bold  ">
                            <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">+</span>
                            ADD NEW TASK
                        </button>
                    </div>
                    {renderTasks(tasks.inProgress)}
                </div>

                <div className="shadow-xl p-4 rounded-2xl bg-white">
                    <div className="flex justify-between mb-6">
                        <h2 className="font-bold text-lg mb-2 text-gray-400">Done</h2>
                        <button className="flex items-center gap-2 text-purple-500  px-4 py-2 font-bold  ">
                            <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold">+</span>
                            ADD NEW TASK
                        </button>   
                    </div>
                    {renderTasks(tasks.done)}
                </div>
            </div>
        </div>
    );
};

export default Dribbble;
