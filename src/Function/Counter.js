import React, { useState, useEffect} from 'react';

//useEffect-02 ex
const CounterFun = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => //mount
    {setCount((prev)=> prev+1)},1000)
    console.log('component mount'); 

    return () => { //unmount
      clearInterval(interval)
      console.log('component unmount')
      
    }

  }, [])

  // useEffect(() => {
  //   if(count > 10) {
  //     setCount(0)
  //   }
  // },[count])

    return (  
        <>
            <h1>Counter fun: {count}</h1>
        </>
    );
}


export default CounterFun;

