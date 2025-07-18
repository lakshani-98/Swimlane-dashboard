'use client';
import React from 'react';
import { categoryColors } from '../utils/categoryColors';
import { FaEllipsisH, FaLink, FaRegCommentDots, FaRegClock, FaExclamationCircle } from 'react-icons/fa';

export default function TaskCard({ task }) {
  const categoryColor = categoryColors[task.category] || 'bg-gray-200';
  const priorityColor = task.priority === 'high' ? 'text-red-600' : 'text-green-600';

  const onDragStart = (e) => {
    e.dataTransfer.setData('text/plain', task.id.toString());
  };

  return (
    <div
      className="bg-white p-4 rounded-md shadow-sm space-y-3 cursor-move"
      draggable
      onDragStart={onDragStart}
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded ${categoryColor}`}></div>
          <span className="text-sm font-medium text-gray-400">{task.category}</span>
        </div>
        <FaEllipsisH className="text-gray-400 cursor-pointer" />
      </div>

      <h3 className="text-gray-800 font-semibold text-base">{task.title}</h3>

      <div className="flex items-center space-x-1 text-sm">
        <FaExclamationCircle className={priorityColor} />
        <span className={priorityColor + " font-medium"}>{task.priority}</span>
      </div>

      {task.image && (
        <img
          src={task.image}
          alt="Task related"
          className="w-full h-32 object-cover rounded-md"
        />
      )}

      <hr className="my-2 border-gray-200" />

      <div className="flex justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-1">
          <FaLink />
          <span>{task.linkCount}</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaRegCommentDots />
          <span>{task.messageCount}</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaRegClock />
          <span>{task.due}</span>
        </div>
      </div>
    </div>
  );
}
