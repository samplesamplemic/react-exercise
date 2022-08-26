const CounterButton = (props) => {
    return ( 
        <button onClick={props.handleCounterIncrement}>
            Counter: {props.counter}
        </button>
     );
}
 
export default CounterButton;