import React, { useState, useEffect } from "react";
import fib from "./fib";
import "./App.scss";

const App = () => {
  const [numSpokes, setNumSpokes] = useState(15);
  const [fibValue, setFibValue] = useState(15);
  const [baseHue, setBaseHue] = useState(0);

  const changeNumSpokes = event => setNumSpokes(Number(event.target.value));
  const changeFibValue = event => setFibValue(Number(event.target.value));

  const changeBaseHue = () => setBaseHue(baseHue === 359 ? 0 : baseHue + 1);

  useEffect(() => {
    requestAnimationFrame(changeBaseHue);
  }, [baseHue]);
  return (
    <div id="App">
      <svg width={"100vmin"} height={"100vmin"}>
        {Array.from({ length: numSpokes }).map((_, i) => (
          <Spoke
            key={i}
            fibValue={fibValue}
            baseHue={baseHue}
            style={{
              transform: `translate(50vmin, 50vmin) rotate(${(360 / numSpokes) *
                (i + 1)}deg)`
            }}
          />
        ))}
      </svg>
      <Controls {...{ numSpokes, changeNumSpokes, fibValue, changeFibValue }} />
    </div>
  );
};

export default App;

const Spoke = ({ style, fibValue, baseHue }) => {
  const sequence = fib(fibValue);

  return sequence.slice(0, sequence.length - 2).map((n, i) => {
    const last = sequence[sequence.length - 1];
    return (
      <g style={style} key={i}>
        <rect
          x={`calc((50vmin / ${last}) * ${sequence[i - 1]})`}
          y={`calc((50vmin / ${last}) * ${sequence[i - 1]})`}
          width={`calc((50vmin / ${last}) * ${n})`}
          height={`calc((50vmin / ${last}) * ${n})`}
          style={{
            fill: `hsla(${n + baseHue}, 100%, 50%, 0.05)`,
            stroke: `hsla(${n + baseHue}, 100%, 50%, 1)`
          }}
        />
      </g>
    );
  });
};

const Controls = ({ numSpokes, changeNumSpokes, fibValue, changeFibValue }) => (
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
    <a
      href="https://github.com/doppler/fibonacci/blob/master/src/App.js"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Source
    </a>
  </div>
);
