import React, { useState, useEffect} from 'react';

const TodoList = () => {
    const items = [
        'a', 'b', 'c', 'd', 'e', 'f'
    ]
    const [todo, setTodo] = useState('')
   const handleChange = (e) => {
   setTodo(e.target.value)
   }
   const handleSubmit = (e) => {
    e.preventDefault();
    items.push(todo)
    setTodo('')
    console.log(items);
   }

    return ( 
        <>
        <div>
        <p className="text-xl font-semibold pt-4 mb-4 border-t-2 flex justify-center">Todo</p>
        <input type="text" placeholder="Todo" className='bg-slate-200 rounded-md p-2'
        onChange={handleChange}
        value={todo}
        />
        <button className="bg-slate-200 rounded-md ml-4 p-2"
        type="submit"
        onClick={handleSubmit}
        >INS</button>

        </div>
        <ul>
        {items.map((item, index) => 
            <li key={index + item}>{item}</li>
        )}
        </ul>
        </>
     );
}
 
export default TodoList;