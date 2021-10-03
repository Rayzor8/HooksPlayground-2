import React, { useState, useEffect } from 'react';

const Example = () => {
  const [isLoading, setIsLoading] = useState(false);
  const delay = 1;

  useEffect(() => {
    const loader = setTimeout(() => {
      console.log('setTimeOut is  called');
      setIsLoading(true);
    }, delay * 1000);
    return () => {
      clearTimeout(loader);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="text-2xl bg-white w-4/5 p-4 md:p-8 my-4 rounded shadow-lg flex flex-col gap-4 text-center">
          <h1 className="font-bold text-4xl md:text-6xl title">Pick a Box!!</h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-4">
            <div
              id={1}
              className="border-2 border-gray-900 py-6 px-8 rounded cursor-pointer hover:text-green-600 hover:bg-gray-200 transition-all duration-150"
            >
              <h2>Box 1</h2>
            </div>
            <div
              id={2}
              className="border-2 border-gray-900 py-6 px-8 rounded cursor-pointer hover:text-green-600 hover:bg-gray-200 transition-all duration-150"
            >
              <h2>Box 2</h2>
            </div>
            <div
              id={3}
              className="border-2 border-gray-900 py-6 px-8 rounded cursor-pointer hover:text-green-600 hover:bg-gray-200 transition-all duration-150"
            >
              <h2>Box 3</h2>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading wait {delay}sec... &#128522;</h1>
      )}
    </>
  );
};

export default Example;
