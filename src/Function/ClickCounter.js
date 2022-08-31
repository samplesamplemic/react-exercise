import React,{ useState } from 'react';

const ClickCounterFun = () => {
    const [count, setCount] = useState(0);

   
    return ( 
           <>
           <div className='flex gap-4 bg-slate-200 p-2 rounded-md'>
            
            <p className='text-lg self-center'>Counter: {count}</p>
            <button 
            className="p-2 border-2 border-black rounded-md"
            onClick={() => setCount(prev => prev + 1)}>+</button>
           </div>
           </>
     );
}
 
export default ClickCounterFun;