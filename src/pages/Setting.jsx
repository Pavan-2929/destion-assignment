import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Setting = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [theme, setTheme] = useState("light");

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const navigate = useNavigate();

  const handleDelete = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast.success("Your account has been deleted");

    navigate("/signup");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      {/* Notification */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
            className="mr-2"
          />
          <label>Email Notifications</label>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={smsNotifications}
            onChange={() => setSmsNotifications(!smsNotifications)}
            className="mr-2"
          />
          <label>SMS Notifications</label>
        </div>
      </div>

      {/* Theme Settings */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Theme Settings</h2>
        <label className="block text-gray-700">Choose Theme</label>
        <select
          value={theme}
          onChange={handleThemeChange}
          className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System Default</option>
        </select>
      </div>

      {/* Account Management */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Account Management</h2>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white rounded-lg px-4 py-2"
        >
          Delete Account
        </button>
        <p className="mt-2 text-gray-600">
          This action is irreversible. Please ensure you want to delete your
          account.
        </p>
      </div>
    </div>
  );
};

export default Setting;
