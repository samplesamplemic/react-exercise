import React,{useState} from "react";
import Hello  from './components/components';
import { Welcome, Age } from "./props/props";
//import Counter from "./state/count";
import Counter from "./lifecycle/count";
import ClickCounter from "./events/countClick";
import ClickTracker from "./events/clicktrack";
import InteractiveWelcome from "./form/form";
import Login from "./form/login";
import UncontrolledLogin from "./form/unconLogin"
import Colors from "./list/colors2";
import TodoList from "./list/todoList";
import Container from "./Composition/container";
import TodoListRender from "./Composition/todoList"
import { LanguageContext } from "./Composition/LanguageContext";
import DisplayLanguage from "./Composition/DisplayLanguage";
import Sum from "./Function/Sum";
import ClickCounterFun from "./Function/ClickCounter";

const myname = <strong>Mic</strong>

//function
 const App = (props) => { 
   const[onlogin, setOnlogin] = useState('ehi');

  const onLogin = () => {
    setOnlogin("work");
  }

  //context-01
  const [lang, setLang] = useState('');

const handleLangChange = (e) => {
 setLang(e.target.value)
}


  return (
    <div className="flex justify-center flex-col items-center gap-4">
      <Hello />
      <Welcome name = {myname} age = {25}/>
      <Counter initialValue={1} incrementAmount={1} incrementInterval={500} />
      <ClickCounter />
      <ClickTracker />
      <InteractiveWelcome />
      <Login onLogin={onLogin} /> 
      <div>
        {onlogin}
      </div>
      <UncontrolledLogin />
      <Colors />
      <TodoList />
      <Container title='title' />
      <TodoListRender //render-props-01 ex
      
      render = {(todo, handleRemove) => {
       
        return (
          <>

          {Array.isArray(todo)
          ? todo.map((item, index) => (
              <li
                key={index + item}
                className="flex justify-between min-w-[10rem] pt-2 border-t-2"
              >
                {item}
                <button
                  className="text-xl font-bold ml-4 remove"
                  onClick={() => handleRemove(item.toLowerCase())}
                >
                  X
                </button>
              </li>
            ))
          : null} 
          </>
        )
      }}
      ></TodoListRender>
      {/* context-01 ex */}
      <div className="flex gap-4 flex-wrap justify-center">
      <p className="text-l font-semibold basis-full text-center border-t-2 ">Context</p>
      <select name="" value={lang} onChange={handleLangChange}>
                <option value="en">EN</option>
                <option value="it">IT</option>

            </select>
      <LanguageContext.Provider value={lang}>
        <DisplayLanguage />
      </LanguageContext.Provider>

      </div>
      
       <div className="pt-4 mt-4 border-t-2 flex flex-col  text-center">{/* function-components ex */}
         <h1 className="text-xl font-bold">Function Components</h1>       
        <Sum />
      </div>
      <ClickCounterFun />
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