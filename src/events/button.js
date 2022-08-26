const CounterButton = (props) => {
    return ( 
        <button onClick={props.handleCounterIncrement}
        className="bg-slate-400 w-24 rounded-md"
        >
            Counter: {props.counter}
        </button>
     );
}
 
export default CounterButton;