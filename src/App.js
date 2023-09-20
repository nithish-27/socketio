import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateNew from "./pages/CreateNew";
import React, { createContext, useContext } from "react";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";

export const UserContext = createContext({});
export const useAppContext = () => useContext(UserContext);

function App() {
  const [userInfo, setUserInfo] = useState({});

  console.log("[userinfoapp]", userInfo);

  const [username, setUsername] = useState("null");
  useEffect(() => {}, [username]);
  console.log("[usernameapp]", username);

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ userInfo, setUserInfo, username, setUsername }}
      >
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="createblog" element={<CreateNew />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="post/:id" element={<PostPage />} />
            <Route path="edit/:id" element={<EditPost />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
