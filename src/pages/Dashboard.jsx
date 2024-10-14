import React from "react";
import {
  FaUser,
  FaChartLine,
  FaClipboardList,
  FaBell,
  FaDollarSign,
} from "react-icons/fa";

const dummyData = [
  {
    id: 1,
    title: "Users",
    value: 120,
    icon: <FaUser className="text-blue-500" />,
  },
  {
    id: 2,
    title: "Revenue",
    value: "$15,000",
    icon: <FaDollarSign className="text-green-500" />,
  },
  {
    id: 3,
    title: "Tasks",
    value: 35,
    icon: <FaClipboardList className="text-orange-500" />,
  },
  {
    id: 4,
    title: "New Signups",
    value: 15,
    icon: <FaUser className="text-purple-500" />,
  },
  {
    id: 5,
    title: "Pending Tasks",
    value: 10,
    icon: <FaClipboardList className="text-red-500" />,
  },
];

const recentActivities = [
  "User John Doe signed up.",
  "Task 'Design UI' completed.",
  "Revenue report generated.",
  "User Jane Smith made a purchase.",
  "New features deployed to production.",
  "User Michael Brown updated their profile.",
];

const Dashboard = () => {
  return (
    <div>
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="relative">
          <FaBell className="text-gray-600 text-2xl" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {dummyData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 flex items-center"
          >
            <div className="flex-shrink-0">{item.icon}</div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
        <ul className="list-disc pl-5">
          {recentActivities.map((activity, index) => (
            <li key={index} className="text-gray-700 mb-2">
              {activity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
