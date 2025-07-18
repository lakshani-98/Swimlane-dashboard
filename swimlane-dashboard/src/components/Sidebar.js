export default function Sidebar() {
  return (
    <aside className="w-[200px] min-w-[150px] bg-white shadow-md p-4 hidden md:block">
      <nav>
        <ul className="space-y-2 text-sm">
          <li className="font-semibold">Dashboard</li>
          <li>Dashboard</li>
          <li>Boards</li>
          <li>Messages</li>
          <li>Calender</li>
          <li>Team Members</li>
        </ul>
      </nav>
    </aside>
  );
}
