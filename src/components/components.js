import React from "react";

export default class Hello extends React.Component {
    render() {
      return (
          <>
          <h1 className="text-3xl font-bold">Hello, World!</h1>
          <Message />
          </>
      );
        
    }
  }
  //export {Hello};
  
  export const Message = () => {
      return ( 
          <p className="text-xl">What a beautiful day</p>
          
       );
  }

 
   
  