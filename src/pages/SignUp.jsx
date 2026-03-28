// src/pages/SignUp.jsx
import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

const defaultRoles = [
  { id: "1", name: "Customer" },
  { id: "2", name: "Store" },
  { id: "3", name: "Admin" },
];

const SignUp = () => {
  const navigate = useNavigate();
  const [roles, setRoles] = useState(defaultRoles);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedRole, setSelectedRole] = useState("1");
  const [focusedField, setFocusedField] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await api.get("/roles");
        if (response.data && response.data.length > 0) {
          setRoles(response.data);
          const customerRole = response.data.find((r) => r.name === "Customer");
          setSelectedRole(customerRole ? customerRole.id : response.data[0].id);
        }
      } catch (err) {
        console.error("Roles fetch error, using defaults:", err);
      }
    };
    fetchRoles();
  }, []);

  const validations = {
    name: {
      required: "Name is required",
      minLength: {
        value: 3,
        message: "Name must be at least 3 characters",
      },
    },
    email: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
    },
    password: {
      required: "Password is required",
      pattern: {
        value:
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        message:
          "Password must be at least 8 characters with numbers, lowercase, uppercase and special chars",
      },
    },
    confirmPassword: {
      required: "Please confirm your password",
      validate: (value) => value === password || "Passwords do not match",
    },
  };

  const storeValidations = {
    storeName: {
      required: "Store name is required",
      minLength: {
        value: 3,
        message: "Store name must be at least 3 characters",
      },
    },
    storePhone: {
      required: "Store phone is required",
      pattern: {
        value: /^[0-9]{10}$/,
        message: "Phone must be 10 digits (Turkey format)",
      },
    },
    storeTaxNo: {
      required: "Tax ID is required",
      pattern: {
        value: /^T[0-9]{10}$/,
        message: "Tax ID must match pattern: TXXXXXXXXXX",
      },
    },
    storeBankAccount: {
      required: "Bank account (IBAN) is required",
      pattern: {
        value: /^TR[0-9]{24}$/,
        message: "Please enter a valid Turkish IBAN (TR + 24 digits)",
      },
    },
  };

  const onSubmit = async (data) => {
    setLoading(true);
    setError("");

    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: selectedRole,
    };

    const storeRole = roles.find((r) => r.name === "Store");
    if (storeRole && selectedRole === storeRole.id) {
      formData.store = {
        name: data.storeName,
        phone: data.storePhone,
        tax_no: data.storeTaxNo,
        bank_account: data.storeBankAccount,
      };
    }

    try {
      const response = await api.post("/signup", formData);
      alert("You need to click link in email to activate your account!");
      navigate(-1);
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed. Please try again.",
      );
      setLoading(false);
    }
  };

  const isStoreRole = () => {
    const storeRole = roles.find((r) => r.name === "Store");
    return storeRole && selectedRole === storeRole.id;
  };

  const inputClasses = (fieldName) => `
    w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 
    transition-all duration-300 transform
    ${errors[fieldName] ? "border-red-500 focus:ring-red-500" : "border-gray-300"}
    ${focusedField === fieldName ? "scale-[1.02] shadow-md" : "hover:border-blue-300"}
  `;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-500">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8 animate-slide-down">
          Sign Up
        </h2>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm animate-shake">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Role Selection */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Role
            </label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-400 cursor-pointer"
            >
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>

          {/* Name */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              {...register("name", validations.name)}
              type="text"
              className={inputClasses("name")}
              placeholder="John Doe"
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 animate-fade-in">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              {...register("email", validations.email)}
              type="email"
              className={inputClasses("email")}
              placeholder="john@example.com"
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 animate-fade-in">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              {...register("password", validations.password)}
              type="password"
              className={inputClasses("password")}
              placeholder="••••••••"
              onFocus={() => setFocusedField("password")}
              onBlur={() => setFocusedField(null)}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600 animate-fade-in">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              {...register("confirmPassword", validations.confirmPassword)}
              type="password"
              className={inputClasses("confirmPassword")}
              placeholder="••••••••"
              onFocus={() => setFocusedField("confirmPassword")}
              onBlur={() => setFocusedField(null)}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600 animate-fade-in">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Store Fields */}
          {isStoreRole() && (
            <div className="space-y-6 pt-4 border-t border-gray-200 animate-slide-up">
              <h3 className="text-lg font-medium text-gray-900">
                Store Information
              </h3>

              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Store Name
                </label>
                <input
                  {...register("storeName", storeValidations.storeName)}
                  type="text"
                  className={inputClasses("storeName")}
                  placeholder="My Store"
                  onFocus={() => setFocusedField("storeName")}
                  onBlur={() => setFocusedField(null)}
                />
                {errors.storeName && (
                  <p className="mt-1 text-sm text-red-600 animate-fade-in">
                    {errors.storeName.message}
                  </p>
                )}
              </div>

              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Store Phone (10 digits)
                </label>
                <input
                  {...register("storePhone", storeValidations.storePhone)}
                  type="tel"
                  className={inputClasses("storePhone")}
                  placeholder="5XX1234567"
                  onFocus={() => setFocusedField("storePhone")}
                  onBlur={() => setFocusedField(null)}
                />
                {errors.storePhone && (
                  <p className="mt-1 text-sm text-red-600 animate-fade-in">
                    {errors.storePhone.message}
                  </p>
                )}
              </div>

              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tax ID (TXXXXXXXXXX)
                </label>
                <input
                  {...register("storeTaxNo", storeValidations.storeTaxNo)}
                  type="text"
                  className={inputClasses("storeTaxNo")}
                  placeholder="T1234567890"
                  onFocus={() => setFocusedField("storeTaxNo")}
                  onBlur={() => setFocusedField(null)}
                />
                {errors.storeTaxNo && (
                  <p className="mt-1 text-sm text-red-600 animate-fade-in">
                    {errors.storeTaxNo.message}
                  </p>
                )}
              </div>

              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bank Account (IBAN)
                </label>
                <input
                  {...register(
                    "storeBankAccount",
                    storeValidations.storeBankAccount,
                  )}
                  type="text"
                  className={inputClasses("storeBankAccount")}
                  placeholder="TR000000000000000000000000"
                  onFocus={() => setFocusedField("storeBankAccount")}
                  onBlur={() => setFocusedField(null)}
                />
                {errors.storeBankAccount && (
                  <p className="mt-1 text-sm text-red-600 animate-fade-in">
                    {errors.storeBankAccount.message}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              {loading ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
