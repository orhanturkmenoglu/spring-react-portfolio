import axios from "axios";
import React, { useState } from "react";
import { API_ENDPOINTS, BASE_URL } from "../utils/apiEndpoints";
import toast from "react-hot-toast";
import { LoaderCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data, status } = await axios.post(
        `${BASE_URL}${API_ENDPOINTS.LOGIN}`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(data);
      console.log(status);
      if (status === 201) {
        setFormData({ email: "", password: "" });
        toast.success("Successfully logged in!");
        navigate("/")
      }
    } catch (err) {
      console.error(err);
      console.log("Error ");
      setError("Invalid email or password!");
      toast.error("Login failed! Check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 transition-colors duration-300">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100 border-b pb-3">
          🔑 Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5 ">
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
              placeholder="your.email@example.com"
              required
              className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-300 text-black outline-none transition-all duration-200"
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
              className="w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-300 text-black outline-none transition-all duration-200"
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 dark:text-red-400 text-center font-semibold mt-2">
              {error}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <LoaderCircle className="animate-spin h-5 w-5 text-white" />
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
