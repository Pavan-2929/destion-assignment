import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [bio, setBio] = useState("Web Developer and Tech Enthusiast.");

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogOut = () => {
    localStorage.removeItem("token");

    toast.success("You have logged out");

    navigate("/signup");
  };

  return (
    <div>
      {/* Title */}
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold">Profile</h1>
        <button
          onClick={handleLogOut}
          className="bg-red-500 text-white rounded-lg px-4 py-2"
        >
          Logout
        </button>
      </div>
      {/* About-Me */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">About Me</h2>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2"
          rows="4"
          placeholder="Tell us about yourself..."
        />
      </div>
      {/* Account Setting */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            value={user.email}
            disabled
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            placeholder="Enter your email"
          />
        </div>
        <button className="bg-blue-500 text-white rounded-lg px-4 py-2">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Profile;
