import React, {useState, useEffect} from 'react';



//class solution
export default class Counter extends React.Component {
    state = { count : this.props.initialValue ?? 0}

    constructor(props) {
        super(props)
        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + (this.props.incrementAmount ?? 1),
                }
            })
        }, this.props.incrementInterval ?? 1000)
    }

    render() {
        return (
            <>
            <CounterDisplay count ={this.state.count}/>
           </>
        )
    }
}

Counter.defaultProps = {

}

const CounterDisplay = (props) => { //state-04
    return ( 
        <h1>{props.count}</h1>
     );
}
 
export { CounterDisplay };


//standard solution
// const Count = () => {  
//     const [count, setCount] = useState(0);
    
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCount((count) => count+1);
//         }, 1000);
//         return () => clearInterval(interval);
//     }, [])
   
//     return ( 
//        <>
//         <h1>{count}</h1>
//        </>
//      );
// }
 
// export default Count;