'use client';
import React from 'react';
import TaskCard from './TaskCard';
import { FaPlus, FaEllipsisH } from 'react-icons/fa';
import { useTaskStore } from '../app/store/useTaskStore';

export default function Swimlane({ title }) {
  const { tasks, updateTaskStatus } = useTaskStore();

  const titleColors = {
    'to do': 'bg-gray-300 text-gray-800',
    'in progress': 'bg-orange-400 text-white',
    'approved': 'bg-green-300 text-gray-800',
    'reject': 'bg-red-500 text-white',
  };

  const getStatusKey = (title) => {
    switch (title.toLowerCase()) {
      case 'to do':
        return 'todo';
      case 'in progress':
        return 'in progress';
      case 'approved':
        return 'approved';
      case 'reject':
        return 'reject';
      default:
        return '';
    }
  };

  const status = getStatusKey(title);
  const filteredTasks = tasks.filter((task) => task.status === status);
  const btnClass = titleColors[status] || 'bg-gray-200 text-gray-800';

  const handleDrop = (e) => {
    e.preventDefault();
    const taskIdStr = e.dataTransfer.getData('text/plain');
    const taskId = Number(taskIdStr);
    updateTaskStatus(taskId, status);
  };

  const allowDrop = (e) => e.preventDefault();

  return (
    <div
      className="bg-white rounded-md shadow-md p-4 w-72 flex flex-col"
      onDrop={handleDrop}
      onDragOver={allowDrop}
    >
      <div className="flex justify-between items-center mb-4">
        <button
          className={`px-4 py-1 rounded-full font-semibold ${btnClass} cursor-pointer`}
          type="button"
        >
          {title}
        </button>
        <div className="flex items-center gap-3">
          <button
            className="text-gray-600 hover:text-gray-800"
            aria-label={`Add new task to ${title}`}
            type="button"
          >
            <FaPlus />
          </button>
          <button
            className="text-gray-600 hover:text-gray-800"
            aria-label={`More options for ${title}`}
            type="button"
          >
            <FaEllipsisH />
          </button>
        </div>
      </div>

      <div className="flex-grow overflow-auto">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
