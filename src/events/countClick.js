import React from 'react';
class ClickCounter extends React.Component {
    state = { count: 0 };
  
    //event-01 ex
 handleCounterIncrement() {
    this.setState((state)=> {
        return {
            count: state.count + 1,
        }
    })
 }

    render() {                 //another method instead of bind()
        return (           //(e) =>this.handleCounterIncrement(e)
            <button onClick={this.handleCounterIncrement.bind(this)}>
                Counter: {this.state.count}
            </button>
         );
    }
}
 
export default ClickCounter;

