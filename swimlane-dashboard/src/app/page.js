'use client';
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Swimlane from '../components/Swimlane';
import ProjectHeader from '../components/ProjectHeader';
import { useTaskStore } from './store/useTaskStore';

export default function HomePage() {
  const { loadTasks } = useTaskStore();

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <div className="h-screen flex flex-col">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <div className="flex-1 p-4 bg-gray-100 flex flex-col">
          <ProjectHeader />

          <div className="flex overflow-x-auto space-x-6 mt-4">
            <Swimlane title="To Do" />
            <Swimlane title="In Progress" />
            <Swimlane title="Approved" />
            <Swimlane title="Reject" />
          </div>
        </div>
      </div>
    </div>
  );
}
