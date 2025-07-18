'use client';
import { useEffect } from 'react';
import Swimlane from './Swimlane';
import { useTaskStore } from '../store/useTaskStore';

export default function Board() {
  const { tasks, loadTasks } = useTaskStore();

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const statuses = ['todo', 'in progress', 'approved', 'reject'];

  return (
    <div className="flex gap-4 overflow-x-auto p-6 bg-gray-100 min-h-screen">
      {statuses.map((status) => (
        <Swimlane
          key={status}
          title={status}
          tasks={tasks.filter((task) => task.status.toLowerCase() === status)}
        />
      ))}
    </div>
  );
}
