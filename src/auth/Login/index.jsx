import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../firebase";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login as loginHandle } from "../../redux/store/auth";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password);

    const checkuser = async () => {
      await getDocs(collection(db, "users")).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().email === email) {
            dispatch(loginHandle(doc.data()));
          }
        });
      });
    };

    // if you have a user  first checking if the user is in the database
    if (user) {
      checkuser();
      dispatch(loginHandle(user));
      navigate("/", {
        replace: true,
      });
    } else {
      alert("user not found");
    }
  };
  return (
    <div className="registerForm">
      <Toaster />
      <div className="w-full h-96 gap-4 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Login</h1>
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
            Login
          </button>
        </form>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
