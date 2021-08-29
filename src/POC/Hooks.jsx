import React, { useState, useEffect } from "react";

export default function Hooks() {
  // variable, setter funtion  -> default state
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(Date.now());

  async function fn() {
    console.log("Hello from fn", Date.now());
  }
  //everytime
  useEffect(fn);
  // Behaves like  componentDidMount runs only one time after render
  useEffect(fn, []);
  //everytime the parameter inside the array changes
  useEffect(fn, [count, time]);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <p
        onClick={() => {
          setTime(Date.now());
        }}
      >
        {time}
      </p>
    </>
  );
}
