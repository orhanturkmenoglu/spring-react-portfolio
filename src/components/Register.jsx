import axios from "axios";
import React, { useState } from "react";
import { API_ENDPOINTS, BASE_URL } from "../utils/apiEndpoints";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setSuccess(false);

  try {
    const response = await axios.post(
      `${BASE_URL}${API_ENDPOINTS.REGISTER}`,
      formData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.status === 201) {
      setSuccess(true);
      setFormData({ fullName: "", email: "", password: "" });

      toast.success("Registration successful! 🎉 Redirecting to login...", {
          duration: 3000,
          style: {
            background: "#22c55e",
            color: "#fff",
            fontWeight: "500",
          },
        });

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } else {
        toast("Unexpected response received.", {
          icon: "⚠️",
        });
      }
  }  catch (err) {
      console.error("❌ Registration failed:", err);

      const errorMsg =
        err.response?.data?.message ||
        "Registration failed. Please try again later.";

      toast.error(errorMsg, {
        duration: 4000,
        style: {
          background: "#ef4444",
          color: "#fff",
          fontWeight: "500",
        },
      });
    } finally {
      setLoading(false);
    }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 transition-colors duration-300">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 text-center border-b pb-3">
          📝 Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g., John Doe"
              required
              className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 text-black dark:text-white outline-none transition-all duration-200"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 text-black dark:text-white outline-none transition-all duration-200"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-200">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              required
              className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 text-black dark:text-white outline-none transition-all duration-200"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold text-lg shadow-lg transition-all duration-300"
          >
            {loading ? "Registering..." : "Register"}
          </button>

          {/* Success Message */}
          {success && (
            <p className="text-green-500 dark:text-green-400 text-center font-semibold mt-2 animate-pulse">
              ✅ Registration successful!
            </p>
          )}
        </form>

        <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
