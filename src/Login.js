import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
function Login() {
  const signIn = () => {};
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Discord_Color_Text_Logo.svg/512px-Discord_Color_Text_Logo.svg.png"
          alt=""
        />
      </div>

      <Button onClick={signIn}>Sign iN </Button>
    </div>
  );
}

export default Login;
