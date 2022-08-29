import React, { useState, useEffect } from "react";

const TodoListRender = (props) => {
  const [todo, setTodo] = useState(""); //i called todo instead of items

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo((prev) => [...prev, document.querySelector("#myId2").value]);
    console.log(todo); //lists-03 ex
    //console.log(document.querySelector("#myId").value); //lists-03 ex
  };

  useEffect(() => {
    //lists-04 ex
    document.querySelector("#myId2").value = "";
  }, [todo]);

  const handleReset = (e) => {
    //lists-05 ex
    e.preventDefault();
    setTodo([]);
    //console.log(todo);
  };

  const handleRemove = (item) => {
    //lists-06 ex
    
    //console.log(todo);
    const list = [...todo];
    const updateList = list.filter((el) => el.toLowerCase() !== item);
    setTodo(updateList);
  };

 return (
  
    <>
      <div>
        <p className="text-xl font-semibold pt-4 mb-4 border-t-2 flex justify-center">
          Todo Render Props
        </p>
        <input
          type="text"
          placeholder="Todo"
          id="myId2"
          className="bg-slate-200 rounded-md p-2"
          name="mytodo"
        />
        <button
          className="bg-slate-200 rounded-md ml-4 p-2"
          type="submit"
          onClick={handleSubmit}
        >
          INS
        </button>
        <button
          className="bg-slate-200 rounded-md ml-1 p-2"
          type="reset"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <ul>
      {props.render(todo, handleRemove)}
     {/* render-props 01 ex */}
        {/* {Array.isArray(todo)
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
          : null} */}
      </ul>
    </>
  );
};

export default TodoListRender;
