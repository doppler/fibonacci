import React from "react";
import fib from "./fib";
import "./App.scss";

const App = () => {
  return (
    <div id="App">
      <SquareFlower />
    </div>
  );
};

const SquareFlower = ({ style }) => (
  <svg width={"100vmin"} height={"100vmin"} style={style}>
    {Array.from({ length: 8 }).map((_, i) => (
      <Spoke
        style={{
          transform: `translate(50vmin, 50vmin) rotate(${(360 / 8) *
            (i + 1)}deg)`
        }}
      />
    ))}
  </svg>
);

const Spoke = ({ style }) => {
  const sequence = fib(10);
  console.log({ sequence });
  return sequence.map((n, i) => (
    <g style={style}>
      <rect
        x={`${sequence[i - 1]}`}
        y={`${sequence[i - 1]}`}
        width={n}
        height={n}
        style={{
          fill: `hsla(${n}, 100%, 50%, 0.1)`,
          stroke: `hsla(${n}, 100%, 50%, 1)`
        }}
      />
    </g>
  ));
};
export default App;
