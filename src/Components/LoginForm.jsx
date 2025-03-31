// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../redux/authSlice";
// import { useNavigate } from "react-router-dom";

// const LoginForm = () => {
//   const [email, setEmail] = useState("eve.holt@reqres.in");
//   const [password, setPassword] = useState("cityslicka");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { error } = useSelector((state) => state.auth);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const result = await dispatch(loginUser({ email, password }));
//     if (result.meta.requestStatus === "fulfilled") {
//       navigate("/users");
//     }
//   };

//   console.log("working");

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center">Login</h2>
//         {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//         <form onSubmit={handleSubmit} className="mt-4">
//           <div className="mb-4">
//             <label className="block text-sm font-medium">Email</label>
//             <input
//               type="email"
//               className="w-full p-2 border rounded"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium">Password</label>
//             <input
//               type="password"
//               className="w-full p-2 border rounded"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white p-2 rounded"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isFormValid = email.trim() !== "" && password.trim() !== ""; // Enable button only when both fields are filled

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      dispatch(loginUser({ email, password })); // Dispatch Redux action
      navigate("/users"); // Navigate to UserList page
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full text-white p-2 rounded ${
              isFormValid ? "bg-blue-600" : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isFormValid}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
