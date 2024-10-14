import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/");
      return;
    }
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    setLoading(true);

    const localStorageUser = JSON.parse(localStorage.getItem("user"));

    if (!localStorageUser) {
      toast.error("User not found in local storage. Please sign up first.");
      setLoading(false);
      return;
    }

    if (
      localStorageUser.email === user.email &&
      localStorageUser.password === user.password
    ) {
      localStorage.setItem("token", "authenticated");
      toast.success("SignIn Successful");
      navigate("/");
    } else {
      toast.error("Invalid credentials");
    }
    setLoading(false);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-3 md:p-5">
      <div className="max-w-md w-full bg-gray-800 p-4 md:p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-10">
            <label
              htmlFor="password"
              className="block text-sm text-gray-400 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            to="/forgot-password"
            className="text-sm text-blue-500 hover:underline mb-2"
          >
            Forgot Password?
          </Link>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
