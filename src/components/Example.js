import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';

const Example = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [boxPicked, setBoxPicked] = useState(0);
  const [imageData, setImageData] = useState(''); //falsy value

  const delay = 1;

  const box1 = useRef(null),
    box2 = useRef(null),
    box3 = useRef(null);

  useEffect(() => {
    const loader = setTimeout(() => {;
      setIsLoading(true);
    }, delay * 1000);
    return () => {
      clearTimeout(loader);
    };
  }, []);

  useEffect(() => {
    if (boxPicked === 0) setImageData('');
    fetchImage(boxPicked);
  }, [boxPicked]);

  const fetchImage = async (boxId) => {
    const FIRST_URL = 'https://randomfox.ca/floof/?ref=apilist.fun',
      SECOND_URL = 'https://aws.random.cat/meow?ref=apilist.fun',
      THIRD_URL = 'https://dog.ceo/api/breeds/image/random';

    if (boxId === 1) {
      const response = await axios.get(FIRST_URL);
      setImageData(response.data.image);
    }

    if (boxId === 2) {
      const response = await axios.get(SECOND_URL);
      setImageData(response.data.file);
    }

    if (boxId === 3) {
      const response = await axios.get(THIRD_URL);
      setImageData(response.data.message);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="text-2xl bg-white w-4/5 p-4 md:p-8 my-4 rounded shadow-lg flex flex-col gap-4 text-center">
          <h1 className="font-bold text-4xl md:text-6xl title">Pick a Box!!</h1>
          <h1 className="text-green-600 italic">
            Your choice is Box number {boxPicked}.
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-4">
            <div
              ref={box1}
              id="1"
              className="border-4 border-purple-500 py-6 px-8 rounded cursor-pointer hover:text-green-600 hover:bg-gray-200 transition-all duration-150"
              onClick={() => setBoxPicked(parseInt(box1.current.id))}
            >
              <h2>Box 1</h2>
            </div>
            <div
              ref={box2}
              id={2}
              className="border-4 border-blue-500 py-6 px-8 rounded cursor-pointer hover:text-green-600 hover:bg-gray-200 transition-all duration-150"
              onClick={() => setBoxPicked(parseInt(box2.current.id))}
            >
              <h2>Box 2</h2>
            </div>
            <div
              ref={box3}
              id={3}
              className="border-4 border-green-500 py-6 px-8 rounded cursor-pointer hover:text-green-600 hover:bg-gray-200 transition-all duration-150"
              onClick={() => setBoxPicked(parseInt(box3.current.id))}
            >
              <h2>Box 3</h2>
            </div>
          </div>
          {imageData && (
            <img
              src={imageData}
              alt=""
              className={`${
                boxPicked === 1
                  ? 'border-purple-400'
                  : boxPicked === 2
                  ? 'border-blue-400'
                  : 'border-green-400'
              } border-4 object-cover animate-bounce w-28 h-28 md:w-40 md:h-40 mx-auto mt-16 rounded-full shadow-lg`}
            />
          )}
        </div>
      ) : (
        <h1>Loading wait {delay}sec... &#128522;</h1>
      )}
    </>
  );
};

export default Example;
