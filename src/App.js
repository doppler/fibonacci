import React, { useState } from "react";
import fib from "./fib";
import "./App.scss";

const App = () => {
  const [numSpokes, setNumSpokes] = useState(15);
  const [fibValue, setFibValue] = useState(15);

  const changeNumSpokes = event => setNumSpokes(Number(event.target.value));
  const changeFibValue = event => setFibValue(Number(event.target.value));
  return (
    <div id="App">
      <svg width={"100vmin"} height={"100vmin"}>
        {Array.from({ length: numSpokes }).map((_, i) => (
          <Spoke
            fibValue={fibValue}
            style={{
              transform: `translate(50vmin, 50vmin) rotate(${(360 / numSpokes) *
                (i + 1)}deg)`
            }}
          />
        ))}
      </svg>
      <div id="controls">
        <label htmlFor="num-spokes">Spokes: </label>
        <input
          id="num-spokes"
          type="number"
          value={numSpokes}
          min={1}
          max={42}
          onChange={changeNumSpokes}
        />
        <label htmlFor="fib-number">Iterations: </label>
        <input
          id="fib-number"
          type="number"
          value={fibValue}
          min={2}
          max={36}
          onChange={changeFibValue}
        />
      </div>
      <a
        href="https://github.com/doppler/fibonacci/blob/master/src/App.js"
        target="_blank"
        rel="noopener"
      >
        View Source
      </a>
    </div>
  );
};

const Spoke = ({ style, fibValue }) => {
  const sequence = fib(fibValue);
  console.log({ sequence });
  return sequence.slice(0, sequence.length - 2).map((n, i) => {
    const last = sequence[sequence.length - 1];
    return (
      <g style={style}>
        <rect
          x={`calc((50vmin / ${last}) * ${sequence[i - 1]})`}
          y={`calc((50vmin / ${last}) * ${sequence[i - 1]})`}
          width={`calc((50vmin / ${last}) * ${n})`}
          height={`calc((50vmin / ${last}) * ${n})`}
          style={{
            fill: `hsla(${n}, 100%, 50%, 0.05)`,
            stroke: `hsla(${n}, 100%, 50%, 1)`
          }}
        />
      </g>
    );
  });
};
export default App;
