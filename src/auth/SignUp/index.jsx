import { useState } from "react";
import { register } from "../../firebase";
import { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");

  // generate username
  // const generateUsername = () => {
  //   const username = email.split("@")[0];
  //   setUsername(username);
  // };

  // generateUsername();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, password);

    try {
      const docRef = await addDoc(collection(db, "users"), {
        email: email,
        password: password,
        role: role,
        username: username,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    localStorage.setItem("user", user);

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
      <div className="w-full h-96 gap-4 flex flex-col justify-center items-center my-20">
        <h1 className="text-4xl font-bold">Register</h1>
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
          <select
            name=""
            id=""
            className=" w-80 h-10 border-2 border-gray-300 rounded-md px-2 flex justify-center items-center"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select your role</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="developer">Developer</option>
          </select>
          <input
            type="text"
            placeholder="Username"
            className="w-80 h-10 border-2 border-gray-300 rounded-md px-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
