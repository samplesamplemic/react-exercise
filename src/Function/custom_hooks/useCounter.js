import { useState } from "react";

//custom-hooks-01 ex
export function useCounter(initialValue = 0) {
   const [counter, setCounter] = useState(initialValue)

    function handleIncrement() {
        setCounter((c) => c + 1)
    }

    function handleDecrement() {
        setCounter((c) => c - 1)
    }

    function handleReset() {
        setCounter(initialValue)
    }

    return {
        counter: counter,
        onIncrement: handleIncrement,
        onDecrement: handleDecrement,
        onReset: handleReset,
    }
}

