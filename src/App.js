import React from 'react';

export class Hello extends React.Component {
    render(){
        return <h1 className="text-3xl font-bold flex justify-center">Hello, World!</h1>
    }
}
//export {Hello};

const App = () => {
    return ( 
        <div>
            <Hello />
        </div>
     );
}
 
export default App ;