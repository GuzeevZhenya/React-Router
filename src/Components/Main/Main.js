import React, { useState } from "react";


const loginReg =
/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function Main() {
  const [login, setLogin] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(false);
  
  
 

  const formChecked = (value, name) => {
    switch (name) {
      case "login":
        setIsLogin(!loginReg.test(value));
        setLogin(value);
        break;

      case "password":
        if (value.length < 6) {
          setIsPassword(true);
        } else {
          setIsPassword(false);
        }
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
       
      <input
        name="login"
        placeholder=""
        onChange={(e) => formChecked(e.target.value, e.target.name)}
      />
      {isLogin ? <p style={{ color: "red" }}>Email не верен</p> : null}

      <input
        name="password"
        placeholder=""
        onChange={(e) => formChecked(e.target.value, e.target.name)}
      />
      {isPassword ? (
        <p style={{ color: "red" }}>Пароль не может быть больше 6 символов</p>
      ) : null}

      <button>Enter</button>
    </div>
  );
}
