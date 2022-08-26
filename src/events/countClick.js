import React from "react";
import CounterButton from "./button";

class ClickCounter extends React.Component {
  state = { count: 0 };

  //event-01 ex
  handleCounterIncrement = () => { //arrow function instead of bind() method
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };
 
  render() {  //this.handleCounterIncrement.bind(this)
              //another method instead of bind()
              //(e) =>this.handleCounterIncrement(e)
    return (
    //   <button onClick={this.handleCounterIncrement}>
    //     Counter: {this.state.count}
    //   </button>
    //event-02
        <CounterButton 
            handleCounterIncrement={this.handleCounterIncrement}
            counter={this.state.count}
        />
    );
  }
}

export default ClickCounter;
