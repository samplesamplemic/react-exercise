import React, { useState } from "react";
import { Welcome } from "../props/props";

//form-ex 01
const InteractiveWelcome = () => {
  const [user, setUser] = useState({
    username: "",
  });
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(user);

  return (
    <>
      <div className="flex gap-4 flex-wrap mt-4 justify-center">
        <input
          type="text"
          name="username"
          onChange={handleChange}
          placeholder="name"
          className="basis-full grow-1 w-4 bg-slate-200 rounded-md pl-2"
        />
        <Welcome name={user.username} age={25} />
      </div>
    </>
  );
};

export default InteractiveWelcome;
