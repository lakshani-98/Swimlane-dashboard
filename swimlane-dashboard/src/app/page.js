'use client';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Swimlane from '../components/Swimlane';

export default function HomePage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('/tasks.json')
      .then((res) => res.json())
      .then(setTasks);
  }, []);

  const getTasksByStatus = (status) =>
    tasks.filter((task) => task.status === status);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="p-4 overflow-x-auto flex space-x-6">
          <Swimlane title="To Do" tasks={getTasksByStatus('todo')} />
          <Swimlane title="In Progress" tasks={getTasksByStatus('in progress')} />
          <Swimlane title="Approved" tasks={getTasksByStatus('approved')} />
          <Swimlane title="Rejected" tasks={getTasksByStatus('reject')} />
        </div>
      </div>
    </div>
  );
}
