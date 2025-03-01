import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("anishwanare@gmail.com");
    const [password, setPassword] = useState("123456789");
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const formdata = {
            email,
            password
        }
        localStorage.setItem("login", JSON.stringify(formdata))
        navigate('/')
    };

    return (
        <div className="flex items-center justify-center min-h-screen mx-6">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl  text-center mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                    <div className="text-center mt-4">
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                    <div className="text-center mt-2">
                        <span className="text-gray-600 text-sm">
                            Don't have an account?{" "}
                            <a className="text-blue-500 hover:text-blue-800" href="#">
                                Sign up
                            </a>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
