import React, {useState} from 'react'
import { auth } from "./Firebase";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import Checkout from './Checkout';
const Login = () => {
  const [email, setemail] =  useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const login = (e) => {
  e.preventDefault();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      navigate("/checkout"); 
      setemail("");
      setpassword("");
    })
    .catch((error) => {
      console.log(error.message);
      alert("Invalid email or password");
      setemail("");
      setpassword("");
      navigate("/register");
    });
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Login
        </h1>
        <form onSubmit={login} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded-md transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login