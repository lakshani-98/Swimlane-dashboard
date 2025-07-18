import TaskCard from './TaskCard';

import { FaPlus, FaEllipsisH } from 'react-icons/fa';

export default function Swimlane({ title, tasks }) {
  const titleColors = {
    'To Do': 'bg-gray-300 text-gray-800',
    'In Progress': 'bg-orange-400 text-white',
    'Approved': 'bg-green-300 text-gray-800',
    'Rejected': 'bg-red-500 text-white',
  };

  const btnClass = titleColors[title] || 'bg-gray-200 text-gray-800';

  return (
    <div className="w-full min-w-[250px] flex flex-col space-y-4 p-4 bg-gray-100 rounded">
      <div className="flex justify-between items-center">
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

      {/* Tasks */}
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
