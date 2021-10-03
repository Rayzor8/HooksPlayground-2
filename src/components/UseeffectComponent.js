import React, { useState, useEffect } from 'react';

const UseeffectComponent = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  console.log('Component 1st mounting');

  useEffect(() => {
    console.log('Something changes on count 1 state. useEffect invoke');
  },[count1]);

  useEffect(() => {
    console.log('Something changes on count 2 state. useEffect invoke');
  },[count2]);


  return (
    <div className="text-2xl bg-white w-4/5 p-2 md:p-8 my-4 rounded shadow-lg flex flex-col gap-4 text-center">
      <h1 className="text-4xl  font-bold">What is UseEffect ?</h1>
      <p className="bg-gray-500 text-white text-center p-2 rounded text-lg md:text-2xl my-4">
        UseEffect is Listener, so what it does is it listen to changes.
        Immediately invoke if something changes. inside the callback function,
        you write the code that will be excute if anything changes.
      </p>
      <small className="text-sm italic">
        Press F12 on your browser, see the console
      </small>

      <div className="flex flex-col gap-2 justify-center">
        <h2 className="text-2xl font-bold ">Count +1 : {count1}</h2>
        <h2 className="text-2xl font-bold ">Count +2 : {count2}</h2>
        <div className="flex my-4 justify-center">
          <button
            onClick={() => setCount1((prev) => prev + 1)}
            className="text-lg w-max px-4 py-2 bg-green-700 text-white rounded-lg"
          >
            Add +1
          </button>
          <button
            onClick={() => setCount2((prev) => prev + 2)}
            className="ml-6 text-lg w-max px-4 py-2 bg-green-700 text-white rounded-lg"
          >
            Add + 2
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseeffectComponent;
