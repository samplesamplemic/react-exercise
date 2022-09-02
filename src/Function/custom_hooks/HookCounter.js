import { useCounter } from "./useCounter";

export function HookCounter({ initialValue = 0 }) {
  //destructure
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initialValue);

  return (
    <>
      <h1 className="py-6 mt-4 border-t-2 border-black text-xl font-semibold">Custom Hooks</h1>
      <div className="flex flex-wrap gap-4 justify-center p-4 rounded-md bg-slate-200">
        <h2 className=" text-center basis-full">Counter: {counter}</h2>
        <button
          className="p-2 border-2 bg-transparent  border-black rounded-md"
          onClick={onIncrement}
        >
          +
        </button>
        <button
          className="p-2 border-2 bg-transparent border-black rounded-md"
          onClick={onDecrement}
        >
          -
        </button>
        <button
          className="p-2 border-2 bg-transparent border-black rounded-md"
          onClick={onReset}
        >
          Reset
        </button>
      </div>
    </>
  );
}
