import { useCallback, useState } from "react";

const UseCounter = ({ initialValue = 0 }) => {
    const [counter, setCounter ] = useState(initialValue);

    const handleIncrement = useCallback(function handleIncrement(){
        setCounter(c => c + 1)
    }, []);
    const handleDecrement = useCallback(function handleDecrement(){
        setCounter(c => c - 1)
    }, []);
    const handleReset = useCallback(function handleIncrement(){
        setCounter(c => c + 1)
    }, []);

    return { counter,
            handleIncrement, 
            handleDecrement, 
            handleReset
    }
}
 
export default UseCounter;