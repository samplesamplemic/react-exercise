import React, { useState, useEffect } from "react";

//class solution
export default class Counter extends React.Component {
  state = { count: this.props.initialValue ?? 0 };

  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState((state) => {
        if (this.state.count === 10) {
          //state-05 ex
          return {
            count: this.props.initialValue,
          };
        } else {
          return {
            count: state.count + (this.props.incrementAmount ?? 1),
          };
        }
      });
    }, this.props.incrementInterval ?? 1000);
  }

  render() {
    return (
      <>
        {/* {this.state.count < (this.props.initialValue*10) 
            ?<CounterDisplay count ={this.state.count}/>
            :<CounterDisplay count = {this.props.initialValue}/>
             } */}
        <CounterDisplay count={this.state.count} />
      </>
    );
  }
}

Counter.defaultProps = {};

const CounterDisplay = (props) => {
  //state-04
  return <h1>{props.count}</h1>;
};

export { CounterDisplay };

//standard solution ?
// const Counter = (props) => {
//     const [count, setCount] = useState(props.initialValue);

//    useEffect(() => {
//         const interval = setInterval(() => {
//             setCount((count) => count+ props.incrementAmount);
//         }, props.incrementInterval);
//         return () => clearInterval(interval);
//     }, [])

//          useEffect(() => {
//             if(count === (props.incrementAmount*10)){
//                 setCount(props.initialValue);
//             }
//          }, [count]);

//         return (
//        <>
//         {count}
//        </>
//      );
// }

// export default Counter;
