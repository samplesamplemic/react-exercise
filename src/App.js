import React from "react";
import Hello  from './components/components';
import Welcome from "./props/props";



 const App = () => 
{
  return (
    <div className="flex justify-center flex-col items-center">
      <Hello />
      <Welcome />
     </div>
  );
};

export default App;
