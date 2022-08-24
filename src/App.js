import React from "react";
import Hello  from './components/components';
import { Welcome, Age } from "./props/props";
import Counter from "./state/count";

const myname = <strong>Mic</strong>

 const App = () => 
{
  return (
    <div className="flex justify-center flex-col items-center">
      <Hello />
      <Welcome name = {myname} age = {25}/>
      <Counter initialValue={2} incrementAmount={0.5} incrementInterval={2000} />
    </div>
  );
};

export default App;

