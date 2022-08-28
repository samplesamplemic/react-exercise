import React, { useState, useEffect } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState(''); //i called todo instead of items
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo((prev) => [...prev, document.querySelector('#myId').value])
    console.log(todo); //lists-03 ex
    console.log(document.querySelector('#myId').value); //lists-03 ex
  };
 
  useEffect(() => {  //lists-04 ex
    document.querySelector('#myId').value = '';
 }, [todo])
  
 
  return (
    <>
      <div>
        <p className="text-xl font-semibold pt-4 mb-4 border-t-2 flex justify-center">
          Todo
        </p>
        <input
          type="text"
          placeholder="Todo"
          id='myId'
          className="bg-slate-200 rounded-md p-2"
          name='mytodo'
        
        />
        <button
          className="bg-slate-200 rounded-md ml-4 p-2"
          type="submit"
          onClick={handleSubmit}
        >
          INS
        </button>
      </div>
      <ul>
        {Array.isArray(todo) ? todo.map((item, index) => (
          <li key={index + item}>{item}</li>
        )) : null}
       
      </ul>
    </>
  );
};

export default TodoList;
