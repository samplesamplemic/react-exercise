import React, { useState } from "react";

//form-ex 2
const Login = (props) => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
    remember: false,
  });                               //login.username 
                                    //login.password 
  const handleChange = (e) => {     //login.remember
    setLogin((prev) => ({ ...prev, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value}));
  };
//  const handleCheck = (e) => {
//     setLogin((prev) => ({ ...prev, [e.target.name]: e.target.checked}))
//  }

//form-04 ex
const handleReset = () => {
  setLogin({
    username: '',
    password: '',
    remember: false
  })
}

 console.log(login);
  return (
    <>
      <div className="flex flex-col gap-4 bg-slate-200 rounded-md p-2">
        <input
          type="text"
          name="username"  //must be the same of one object key into useState Hook or it will created a new one {key: value} object
          value={login.username}
          onChange={handleChange}
          placeholder="name"
          className="bg-slate-200"
        />
        <input
          type="password"
          name="password"
          value={login.password}
          onChange={handleChange}
          placeholder="password"
          className="bg-slate-200"
        />
        <div>
          <input
            type="checkbox"
            name="remember"
            value={login.remember}
            onChange={handleChange}
            checked={login.remember}
            className="bg-slate-200 fit-content mr-2"
          />
          Remember me
        </div>
        <div className= "flex gap-2 justify-around">
        <button //form-03 ex
        className="bg-slate-200 border border-black rounded-md p-1" 
        disabled={login.username === '' && login.password === '' ? true : false}
        onClick={props.onLogin} //in App
        >
          Login
        </button>
        <button
        className="bg-slate-200 border border-black rounded-md p-1"
        onClick={handleReset}
        >
         Reset
        </button>
        </div>
       
      </div>
    </>
  );
};

export default Login;
