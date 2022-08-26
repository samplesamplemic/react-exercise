import React, { useState } from "react";

//form-ex 2
const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    setLogin((prev) => ({ ...prev, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value}));
  };
//  const handleCheck = (e) => {
//     setLogin((prev) => ({ ...prev, [e.target.name]: e.target.checked}))
//  }

 console.log(login);
  return (
    <>
      <div className="flex flex-col gap-4 bg-slate-200 rounded-md p-2">
        <input
          type="text"
          name="username"
          onChange={handleChange}
          placeholder="name"
          className="bg-slate-200"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="password"
          className="bg-slate-200"
        />
        <div>
          <input
            type="checkbox"
            name="remember"
            onChange={handleChange}
            checked={login.remember}
            className="bg-slate-200 fit-content mr-2"
          />
          Remember me
        </div>
      </div>
    </>
  );
};

export default Login;
