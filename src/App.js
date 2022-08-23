import React from "react";
import Hello  from './components';
import Welcome from "./props";



 const App = () => 
{
  return (
    <div className="flex justify-center flex-col items-center">
      <Hello />
      <Welcome name="everyone" />
     </div>
  );
};

export default App;
