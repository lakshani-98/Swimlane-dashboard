import { FaBell, FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-md min-h-[75px] flex items-center justify-between px-6 py-1 w-full">
      {/* Logo and Product Name */}
      <div className="flex items-center gap-4">
        <Image src="/logo.png" alt="Company Logo" width={48} height={40} />
        <h1 className="text-3xl font-bold leading-none">
          <span className="text-black">Board</span>
          <span className="text-blue-500">App</span>
        </h1>
      </div>

      {/* Profile, Notification, Search, Create Button */}
      <div className="flex items-center gap-5">
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 text-base font-semibold">
          Create New Board +
        </button>

        <input
          type="text"
          placeholder="Search tasks..."
          className="border rounded px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <FaBell className="text-2xl text-gray-600 cursor-pointer" />
        <FaUserCircle className="text-2xl text-gray-600 cursor-pointer" />
      </div>
    </header>
  );
}
