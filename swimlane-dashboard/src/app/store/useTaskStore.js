import { create } from 'zustand';

const TASKS_KEY = 'task-board-data';

export const useTaskStore = create((set) => ({
  tasks: [],
  searchQuery: '',

  setSearchQuery: (query) => {
    set({ searchQuery: query });
  },

  loadTasks: async () => {
    const saved = localStorage.getItem(TASKS_KEY);
    if (saved) {
      set({ tasks: JSON.parse(saved) });
    } else {
      const res = await fetch('/tasks.json');
      const data = await res.json();
      set({ tasks: data });
      localStorage.setItem(TASKS_KEY, JSON.stringify(data));
    }
  },

  updateTaskStatus: (taskId, newStatus) => {
    set((state) => {
      const updatedTasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      );
      localStorage.setItem(TASKS_KEY, JSON.stringify(updatedTasks));
      return { tasks: updatedTasks };
    });
  },
}));
