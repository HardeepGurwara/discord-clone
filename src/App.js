import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Chat from "./Chat";
import { login, selectUser, logout } from "./features/userSlice";
import { auth } from "./firebase";
import Login from "./Login";
import Sidebar from "./Sidebar";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user,", authUser);
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}

      {/* sidebar */}
      {/* chat */}
    </div>
  );
}

export default App;
