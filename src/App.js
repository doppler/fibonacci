import React from "react";
import fib from "./fib";
import "./App.scss";

const App = () => {
  const numSpokes = 10;
  const fibValue = 12;
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
    </div>
  );
};

const Spoke = ({ style, fibValue }) => {
  const sequence = fib(fibValue);
  console.log({ sequence });
  return sequence.slice(0, sequence.length - 2).map((n, i) => (
    <g style={style}>
      <rect
        x={`calc((50vmin / ${sequence[sequence.length - 1]}) * ${
          sequence[i - 1]
        })`}
        y={`calc((50vmin / ${sequence[sequence.length - 1]}) * ${
          sequence[i - 1]
        })`}
        width={`calc((50vmin / ${sequence[sequence.length - 1]}) * ${n})`}
        height={`calc((50vmin / ${sequence[sequence.length - 1]}) * ${n})`}
        style={{
          fill: `hsla(${n}, 100%, 50%, 0.1)`,
          stroke: `hsla(${n}, 100%, 50%, 1)`
        }}
      />
    </g>
  ));
};
export default App;
