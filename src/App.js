import React, { useRef, useState, useEffect, memo } from "react";
// import Content from "./components/Content/Content";

function App() {
  const [count, setCount] = useState(60);

  const timerId = useRef();

  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerId.current);
  };

  console.log(count, prevCount.current);

  //   const [show, setShow] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      {/* <button onClick={() => setShow(!show)}>Toggle</button>
      <br />
      {show && <Content />} */}

      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default memo(App);
