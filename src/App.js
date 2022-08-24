import React from "react";
import Hello  from './components/components';
import { Welcome, Age } from "./props/props";

const myname = <strong>Mic</strong>

 const App = () => 
{
  return (
    <div className="flex justify-center flex-col items-center">
      <Hello />
      <Welcome name = "John" age = {25}/>
    </div>
  );
};

export default App;

