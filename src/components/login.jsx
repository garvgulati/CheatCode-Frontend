import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import { login_user } from '../api/authService';

const Login = () => {

    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = async (data , e) => {
        e.preventDefault();
        try {
            const response = await login_user(data);
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='p-4 flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-600'>
            <div className='bg-white rounded-lg shadow-2xl p-6 w-full max-w-md'>
                <h1 className='text-3xl md:text-4xl sm:text-lg font-bold font-roboto'>
                    Welcome Back to CheatCode
                </h1>
                <p className='text-gray-500 text-center mb-6'>
                    Login now to continue exploring
                </p>
                <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
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
                <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>
        <p className="text-gray-600 text-center mt-4">
          Dont't have an account yet ?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Signup in here
          </Link>
        </p>
                
            </div>
        </div>
    )
}

export default Login
