import React, { useEffect, useRef, useState } from "react";

//usestate-02 ex
const Login = (props) => {
  
  //useRef-01
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus()
  }, [])
  

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
          ref={inputRef}
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
        <button 

        //style-03
        className= {login.password.length < 8 ? "bg-red-600 border border-black rounded-md p-1"
         : "bg-green-600 border border-black rounded-md p-1 "} 
       
        //className="bg-slate-200 border border-black rounded-md p-1" 
        disabled={login.username === '' && login.password === '' ? true : false}
        onClick={props.onLogin} 
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
