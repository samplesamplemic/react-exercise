import React from "react";

const Container = (props) => {
  //composition-01 ex
  return (
    <>
      <h1 className="pt-4 border-t-2 text-xl font-bold">Composition</h1>
      <div className=" bg-white border border-red-400 ">
        <div className="text-m m-2">{props.title}</div>
        <div>{props.child}</div>
      </div>
    </>
  );
};

export default Container;
