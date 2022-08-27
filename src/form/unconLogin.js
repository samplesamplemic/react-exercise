import React, { useState, createRef, useEffect } from "react";

const UncontrolledLogin = () => {
  const formRef = createRef(); //forms-6 ex

  //class solution forms-6 ex
  // componentDidMount(){
  //     this.formRef.current.elements.username.focus()
  // }

  //function solution forms-6 ex
  useEffect(() => {
    formRef.current.elements.username.focus();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const remember = e.target.elements.remember.checked;

    console.log({
      username,
      password,
      remember,
    });
  };

  return (
    <>
      <h3 className="pt-4 border-t-2">Uncontrolled Form</h3>
      <div className="bg-slate-200 rounded-md p-2">
        <form
          action=""
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-2"
          ref={formRef}
        >
          <input
            type="text"
            className="bg-slate-200 border border-black rounded-md p-1"
            name="username"
            placeholder="username"
            // autoFocus //forms-06 ex
          />
          <input
            type="password"
            className="bg-slate-200 border border-black rounded-md p-1"
            name="password"
            placeholder="password"
          />

          <div>
            <input
              type="checkbox"
              className="bg-slate-200 border border-black rounded-md mr-2"
              name="remember"
            />
            Remember me
          </div>
          <div className="flex justify-around">
            <button
              type="submit"
              name=""
              className="bg-slate-200 border border-black rounded-md p-1"
            >
              Submit
            </button>
            <button
              type="reset"
              name=""
              className="bg-slate-200 border border-black rounded-md p-1"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UncontrolledLogin;
