'use client';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Swimlane from '../components/Swimlane';
import taskData from '../data/tasks.json';
import ProjectHeader from '../components/ProjectHeader';

export default function HomePage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
   setTasks(taskData);
  }, []);

  const getTasksByStatus = (status) =>
    tasks.filter((task) => task.status === status);

  return (
    <div className="h-screen flex flex-col">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <div className="flex-1 p-4 bg-gray-100 flex flex-col">
          <ProjectHeader />

          <div className="flex overflow-x-auto space-x-6 mt-4">
            <Swimlane title="To Do" tasks={getTasksByStatus('todo')} />
            <Swimlane title="In Progress" tasks={getTasksByStatus('in progress')} />
            <Swimlane title="Approved" tasks={getTasksByStatus('approved')} />
            <Swimlane title="Rejected" tasks={getTasksByStatus('reject')} />
          </div>
        </div>
      </div>
    </div>
  );
}
