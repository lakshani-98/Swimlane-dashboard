import {
  MdDashboard,
  MdViewKanban,
  MdMessage,
  MdCalendarToday,
  MdGroup,
  MdSupport,
  MdLogout,
} from 'react-icons/md';

export default function Sidebar() {
  return (
    <aside className="w-[220px] bg-white shadow-md flex flex-col justify-between h-screen p-4">
      {/* Navigation */}
      <nav>
        <ul className="mt-10 space-y-8 text-sm font-medium text-gray-700">
          {/* 1. mt-10 lifts the list down */}
          {/* 2. space-y-8 increases vertical spacing between list items */}
          <li className="flex items-center gap-2">
            <MdDashboard className="text-xl" /> Dashboard
          </li>
          <li className="flex items-center gap-2">
            <MdViewKanban className="text-xl" /> Boards
          </li>
          <li className="flex items-center gap-2">
            <MdMessage className="text-xl" /> Messages
          </li>
          <li className="flex items-center gap-2">
            <MdCalendarToday className="text-xl" /> Calendar
          </li>
          <li className="flex items-center gap-2">
            <MdGroup className="text-xl" /> Team Members
          </li>
        </ul>
      </nav>

      {/* Bottom Buttons */}
      <div className="flex flex-col gap-3 mt-6">
        <button className="flex items-center justify-center gap-2 w-full py-2 px-3 bg-white text-black border border-black rounded hover:bg-gray-100 transition">
          <MdSupport className="text-lg" />
          Support
        </button>

        <button className="flex items-center justify-center gap-2 w-full py-2 px-3 bg-black text-white rounded hover:bg-gray-800 transition">
          <MdLogout className="text-lg" />
          Logout
        </button>
      </div>
    </aside>
  );
}
