import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Welcome } from "../props/props";
import Counter from "../state/count";
import ShowGithubUser from "./ShowGithubUser";

const App2 = () => {
  //let user = 'samplesamplemic';
  //const [user, setUser] = useState('');setUser((e) => e.target.value)
  return (
    <div className="flex text-center flex-col">
      <h1 className="text-xl font-bold mt-3 py-4 border-t-2 border-black">
        {" "}
        React Router{" "}
      </h1>
      <Routes>
        <Route path="/" element={<Welcome name="mic2" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path={`/users/:username`} element={<ShowGithubUser />} />
      </Routes>
      <div className=" flex flex-wrap justify-center gap-4 mt-4 border-t-2 text-lg font-semibold text-blue-600  ">
        <h2 className="basis-full text-black">Links</h2>
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to={`/users/:username`}>Github User</Link>
      </div>
    </div>
  );
};

export default App2;
