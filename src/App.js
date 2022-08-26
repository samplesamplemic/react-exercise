import React from "react";
import Hello  from './components/components';
import { Welcome, Age } from "./props/props";
//import Counter from "./state/count";
import Counter from "./lifecycle/count";
import ClickCounter from "./events/countClick";
import ClickTracker from "./events/clicktrack";
import InteractiveWelcome from "./form/form";

const myname = <strong>Mic</strong>

//function
 const App = () => 
{
  return (
    <div className="flex justify-center flex-col items-center gap-4">
      <Hello />
      <Welcome name = {myname} age = {25}/>
      <Counter initialValue={1} incrementAmount={1} incrementInterval={500} />
      <ClickCounter />
      <ClickTracker />
      <InteractiveWelcome />
    </div>
  );
};

export default App;

//class
// export default class App extends React.Component{
//   render() {
//     return (
//       <>
//        <div className="flex justify-center flex-col items-center">
//       <Hello />
//       <Welcome name = {myname} age = {25}/>
//       <Counter initialValue={1} incrementAmount={1} incrementInterval={500} />
//     </div>
//       </>
//     )
//   }
// }