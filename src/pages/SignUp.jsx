import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";

const Signup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
      return;
    }
  }, []);

  // Form validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Minimun 3 characters")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Minimun 6 characters")
      .required("Password is required"),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      localStorage.setItem("user", JSON.stringify(values));
      toast.success("User registered locally, now you can sign in");
      navigate("/login");
    },
  });

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-3 md:p-5">
      <div className="max-w-md w-full bg-gray-800 p-4 md:p-8 rounded-lg shadow-lg">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-6">
          Create Account
        </h2>
        <form onSubmit={formik.handleSubmit}>
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
              className={`w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ${
                formik.errors.username && formik.touched.username
                  ? "border-red-500"
                  : ""
              }`}
              placeholder="Enter your username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.errors.username && formik.touched.username && (
              <div className="text-red-500 text-sm pt-1">
                {formik.errors.username}
              </div>
            )}
          </div>
          {/* email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              className={`w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ${
                formik.errors.email && formik.touched.email
                  ? "border-red-500"
                  : ""
              }`}
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.errors.email && formik.touched.email && (
              <div className="text-red-500 text-sm pt-1">
                {formik.errors.email}
              </div>
            )}
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
              className={`w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ${
                formik.errors.password && formik.touched.password
                  ? "border-red-500"
                  : ""
              }`}
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.errors.password && formik.touched.password && (
              <div className="text-red-500 text-sm pt-1">
                {formik.errors.password}
              </div>
            )}
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
              className={`w-full px-4 py-2 bg-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ${
                formik.errors.repeatPassword && formik.touched.repeatPassword
                  ? "border-red-500"
                  : ""
              }`}
              placeholder="Confirm your password"
              value={formik.values.repeatPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            {formik.errors.repeatPassword && formik.touched.repeatPassword && (
              <div className="text-red-500 text-sm pt-1">
                {formik.errors.repeatPassword}
              </div>
            )}
          </div>
          {/* Form-button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center"
          >
            {formik.isSubmitting ? "Loading..." : "Sign Up"}
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
