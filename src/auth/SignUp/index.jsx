import { useState } from "react";
import { register } from "../../firebase";
import { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, password);

    if (user) {
      setEmail("");
      setPassword("");
    }
    navigate("/login", {
      replace: true,
    });
  };
  return (
    <div className="registerForm">
      <Toaster />
      <div className="w-full h-96 gap-4 flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 justify-center items-center"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-80 h-10 border-2 border-gray-300 rounded-md px-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-80 h-10 border-2 border-gray-300 rounded-md px-2"
          />
          <button
            type="submit"
            className="w-80 h-10 bg-blue-500 text-white rounded-md"
          >
            Register
          </button>
        </form>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default SignUp;
