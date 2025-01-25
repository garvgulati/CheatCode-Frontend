import React from 'react';
import { useForm } from 'react-hook-form';
import { sign_up_user } from '../api/authService';
import { Link } from "react-router-dom"

const SignUp = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      const response = await sign_up_user(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-md">
        <h1 className="text-3xl md:text-4xl sm:text-xl font-bold font-roboto text-center mb-6">
          Sign Up now at CheatCode
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Join us and explore the world of law!
        </p>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              className={`w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.name ? "border-red-500" : "border-black"}`}
              {...register('name', { required: "Pleasde enter your full name" })}
            />
          </div>


          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className={`w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.email ? "border-red-500" : "border-black"}`}
              {...register('email', { required: "Email is required", })}
            />
          </div>


          <div>
            <label htmlFor="username" className="block text-gray-700 font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Choose a username"
              className={`w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.username ? "border-red-500" : "border-black"}`}
              {...register('username', { required: "Username is required", })}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className={`w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.password ? "border-red-500" : "border-black"}`}
              {...register('password', {
                required: "Set a password of your choice", minLength: {
                  value: 6,
                  message: "Password should be of minimum length 6"
                }
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign Up
          </button>
        </form>
        <p className="text-gray-600 text-center mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
