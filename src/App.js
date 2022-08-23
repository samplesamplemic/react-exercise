import React from "react";

export class Hello extends React.Component {
  render() {
    return (
        <>
        <h1 className="text-3xl font-bold">Hello, World!</h1>
        <p className="text-xl">What a beautiful day</p>
        </>
    );
      
  }
}
//export {Hello};

const App = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <Hello />
    </div>
  );
};

export default App;
