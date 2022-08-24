import React from "react";
import Hello  from './components/components';
import { Welcome, Age } from "./props/props";
//import Counter from "./state/count";
import Counter from "./lifecycle/count";

const myname = <strong>Mic</strong>

 const App = () => 
{
  return (
    <div className="flex justify-center flex-col items-center">
      <Hello />
      <Welcome name = {myname} age = {25}/>
      <Counter initialValue={1} incrementAmount={1} incrementInterval={500} />
    </div>
  );
};

export default App;

