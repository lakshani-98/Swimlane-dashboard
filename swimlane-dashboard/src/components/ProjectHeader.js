'use client';

import Image from 'next/image';
import { FaPencilAlt } from 'react-icons/fa';

export default function ProjectHeader() {
  const projectTitle = "Sport Xi Project";
  const status = "In Progress";
  const statusColor = "bg-orange-400 text-white";
  const projectDescription = "event production";
  const lastUpdated = "04 April, 2022";

  const profilePics = [
    "/profiles/user.png",
    "/profiles/user.png",
    "/profiles/user.png",
  ];

  return (
    <div className="mb-6 px-4">
      <div className="bg-white p-4 rounded shadow">
        <div className="flex items-center gap-4 mb-2">
          <h2 className="text-2xl font-bold">{projectTitle}</h2>
          <button
            type="button"
            className={`${statusColor} rounded-full px-3 py-1 text-sm font-semibold`}
          >
            {status}
          </button>
        </div>

        <p className="text-gray-400 font-medium mb-3">{projectDescription}</p>

        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-gray-400 font-medium">assigned</span>
          <div className="flex -space-x-3">
            {profilePics.map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt={`User ${idx + 1}`}
                width={32}
                height={32}
                className="rounded-full border-2 border-white object-cover"
                style={{ zIndex: profilePics.length - idx }}
              />
            ))}
          </div>
          <button
            type="button"
            className="flex items-center gap-2 text-gray-400 bg-white border border-gray-300 rounded-full px-3 py-1 text-sm hover:bg-gray-50 transition"
          >
            Manage
            <FaPencilAlt />
          </button>
        </div>

        <hr className="border-gray-200 my-4" />

        <p className="text-gray-400 text-sm">Last Updated on: {lastUpdated}</p>

        <hr className="border-gray-200 mt-4" />
      </div>
    </div>
  );
}
