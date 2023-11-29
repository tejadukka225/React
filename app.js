import React from 'react';
import ReactDOM from 'react-dom';

var jsxHeading = (
    <div>
<h1 id="jsxHeading">Heading from JSX!!</h1>;
<h1 id="jsxHeading2">Heading from JSX!!</h1>;
<h1>Hello, world!</h1>
      <p>This is a paragraph.</p>
      <ul>
        <li>teja</li>
        <li>bujji</li>
        <li>kaveri
        </li>
      </ul>
    </div>
   
);


// Use ReactDOM.render instead of rootReact.render
ReactDOM.render(jsxHeading, document.getElementById('root'));