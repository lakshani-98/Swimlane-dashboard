import TaskCard from './TaskCard';

export default function Swimlane({ title, tasks }) {
  return (
    <div className="w-full min-w-[250px] flex flex-col space-y-4">
      <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
