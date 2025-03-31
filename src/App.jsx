// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
// import UserListPage from "./pages/UserListPage";
// import { useSelector } from "react-redux";

// const PrivateRoute = ({ children }) => {
//   const { token } = useSelector((state) => state.auth);
//   return token ? children : <Navigate to="/" />;
// };

// const App = () => {
//   console.log("App is rendering");

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//         <Route
//           path="/users"
//           element={
//             <PrivateRoute>
//               <UserListPage />
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";
import UserListPage from "./pages/UserListPage";

function App() {
  const user = useSelector((state) => state.auth.user);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/users"
        element={user ? <UserListPage /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;

// function App() {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

//   return (
//     <Routes>
//       <Route path="/" element={<LoginPage />} />
//       <Route
//         path="/users"
//         element={isAuthenticated ? <UserListPage /> : <Navigate to="/" />}
//       />
//     </Routes>
//   );
// }

// export default App;
