(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),i=(n(10),n(1)),u=function(e){for(var t=[2,3],n=2;n<e+1;n++)t.push(t[n-2]+t[n-1]);return t},l=(n(11),function(){var e=Object(a.useState)(15),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(15),u=Object(i.a)(o,2),l=u[0],b=u[1],f=Object(a.useState)(0),h=Object(i.a)(f,2),p=h[0],v=h[1],g=function(){return v(359===p?0:p+1)};return Object(a.useEffect)(function(){requestAnimationFrame(g)},[p]),r.a.createElement("div",{id:"App"},r.a.createElement("svg",{width:"100vmin",height:"100vmin"},Array.from({length:n}).map(function(e,t){return r.a.createElement(m,{key:t,fibValue:l,baseHue:p,style:{transform:"translate(50vmin, 50vmin) rotate(".concat(360/n*(t+1),"deg)")}})})),r.a.createElement(s,{numSpokes:n,changeNumSpokes:function(e){return c(Number(e.target.value))},fibValue:l,changeFibValue:function(e){return b(Number(e.target.value))}}))}),m=function(e){var t=e.style,n=e.fibValue,a=e.baseHue,c=u(n);return c.slice(0,c.length-2).map(function(e,n){var o=c[c.length-1];return r.a.createElement("g",{style:t,key:n},r.a.createElement("rect",{x:"calc((50vmin / ".concat(o,") * ").concat(c[n-1],")"),y:"calc((50vmin / ".concat(o,") * ").concat(c[n-1],")"),width:"calc((50vmin / ".concat(o,") * ").concat(e,")"),height:"calc((50vmin / ".concat(o,") * ").concat(e,")"),style:{fill:"hsla(".concat(e+a,", 100%, 50%, 0.05)"),stroke:"hsla(".concat(e+a,", 100%, 50%, 1)")}}))})},s=function(e){var t=e.numSpokes,n=e.changeNumSpokes,a=e.fibValue,c=e.changeFibValue;return r.a.createElement("div",{id:"controls"},r.a.createElement("label",{htmlFor:"num-spokes"},"Spokes: "),r.a.createElement("input",{id:"num-spokes",type:"number",value:t,min:1,max:42,onChange:n}),r.a.createElement("label",{htmlFor:"fib-number"},"Iterations: "),r.a.createElement("input",{id:"fib-number",type:"number",value:a,min:2,max:36,onChange:c}),r.a.createElement("a",{href:"https://github.com/doppler/fibonacci/blob/master/src/App.js",target:"_blank",rel:"noopener noreferrer"},"View Source"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.4b016533.chunk.js.map