import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Signup = () => {
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
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

  const handleSignUp = (e) => {
    e.preventDefault();
    setLoading(true);

    if (user.password !== user.repeatPassword) {
      toast.error("Password and Confirm-Password should be the same");
      setLoading(false);
      return;
    }

    if (user.username < 3) {
      toast.error("Username should be at least 3 characters long");
      setLoading(false);
      return;
    }

    if (user.password.length < 6) {
      toast.error("Password should be at least 6 characters long");
      setLoading(false);
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));

    toast.success("User registered locally, now you can sign in");

    navigate("/login");
    setLoading(false);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-3 md:p-5">
      <div className="max-w-md w-full bg-gray-800 p-4 md:p-8 rounded-lg shadow-lg">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-6">
          Create Account
        </h2>
        <form onSubmit={handleSignUp}>
          {/* username */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm text-gray-400 mb-2"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  transition duration-300"
              placeholder="Enter your username"
              value={user.username}
              onChange={handleChange}
              required
            />
          </div>
          {/* email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>
          {/* password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm text-gray-400 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Enter your password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>
          {/* confirm-password */}
          <div className="mb-10">
            <label
              htmlFor="repeatPassword"
              className="block text-sm text-gray-400 mb-2"
            >
              Confirm Password
            </label>
            <input
              id="repeatPassword"
              type="password"
              className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Confirm your password"
              value={user.repeatPassword}
              onChange={handleChange}
              required
            />
          </div>
          {/* Form-button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center"
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>
        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
