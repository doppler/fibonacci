import React from "react";
import fib from "./fib";
import "./App.scss";

const App = () => {
  return (
    <div id="App">
      <Quadrant style={{ transform: `rotate(${180}deg)` }} />
      <Quadrant style={{ transform: `rotate(${-90}deg)` }} />
      <Quadrant style={{ transform: `rotate(${90}deg)` }} />
      <Quadrant />
    </div>
  );
};

const Quadrant = ({ style }) => (
  <svg width={377} height={377} style={style}>
    <Squares />
    <Squares style={{ transform: `rotate(${45}deg)` }} />
    <Squares style={{ transform: `rotate(${-45}deg)` }} />
    <Squares style={{ transform: `rotate(${22.5}deg)` }} />
    <Squares style={{ transform: `rotate(${-22.5}deg)` }} />
  </svg>
);
const Squares = ({ style }) => {
  const sequence = fib(10);
  console.log({ sequence });
  return sequence.map((n, i) => (
    <rect
      x={sequence[i - 1]}
      y={sequence[i - 1]}
      width={n}
      height={n}
      style={{
        ...style,
        fill: `hsla(${n}, 100%, 50%, 0.1)`,
        stroke: `hsla(${n}, 100%, 50%, 1)`
      }}
    />
  ));
};
export default App;
