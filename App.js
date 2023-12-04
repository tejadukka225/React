import React from 'react';
import ReactDOM from 'react-dom';

var jsxHeading = (
    <div>
<h1 id="jsxHeading">Suneetha</h1>;
<h1 id="jsxHeading2">Heading from JSX!!</h1>;
<h1>welcome</h1>
      <p>This is a paragraph.</p>
      <ul>
        <li>Ammu</li>
        <li>Saritha</li>
        <li>Sweety</li>
      </ul>
    </div>

);


// Use ReactDOM.render instead of rootReact.render
ReactDOM.render(jsxHeading, document.getElementById('root'));
// Use ReactDOM.render instead of rootReact.render
ReactDOM.render(jsxHeading, document.getElementById('root'));
//creating nested header element using React.Element(h1,h2,h3 inside div with class="title")
const header= React.createElement(
  "div",
  {
    className: "Title",
  },
  [
    React.createElement(
      "h1",
      {},
      "This is h1 Tag"
    ),
    React.createElement(
        "h2",
        {} ,
        "This is h2 Tag"
      ),
      React.createElement(
        "h3",
        {},
        "This is h3 Tag"
      )
  ]
);
//creating sample element using jsx
const s = (
  <div className="Title" key="title">
    <h1 key="h1">This is h1 tag</h1>
    <h2 key="h2">This is h2 tag</h2>
    <h3 key="h3">This is h3 tag</h3>
  </div>
);
//creating functional component of the same with jsx
const u = () => {
  return (
    <div className="Title" key="title">
      <h1 key="h1">This is h1 tag</h1>
      <h2 key="h2">This is h2 tag</h2>
      <h3 key="h3">This is h3 tag</h3>
    </div>
  );
};
//passing attiribute into the tag in jsx
const c = () => {
  return (
    <div className="Title" key="title">
      <h1 style={{color:"blue"}} key="h1">This is h1 tag</h1>
      <h2 style={{color:"palevioletred"}} key="h2">This is h2 tag</h2>
      <h3 style={{color:"green"}} key="h3">This is h3 tag</h3>
    </div>
  );
};

//Composition of Component (Add a component inside another)
const AnotherComponent = function(){
  return <h2> This is Another Component</h2>
}

const h= () => {
return (
  <div className="Title" key="title">
    <h1 style={{color:"blue"}} key="h1">This is h1 tag</h1>
    <h2 style={{color:"palevioletred"}} key="h2">This is h2 tag</h2>
    <AnotherComponent/>
    <h3 style={{color:"green"}} key="h3">This is h3 tag</h3>
  </div>
);
};
//{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.

const element = <h1>This is React Element</h1>; // This is React element or {TitleComponent}

const TitleElement = () => {
  return <h2 style={{ color: "red" }}>This Title Element</h2>;
}; // This is Title Component

const i = () => {
  return (
    <div className="Title" key="title">
      {/* This is {TitleComponent} */
      /*{element}
      <h1 style={{ color: "blue" }} key="h1">
        This is h1 tag
      </h1>
      {/* This is {<TitleComponent/>} */
      /*<TitleElement/>
      <h2 style={{ color: "palevioletred" }} key="h2">
        This is h2 tag
      </h2>
      { /*This is {<TitleComponent></TitleComponent>}*/}
      <TitleElement></TitleElement>
      <h3 style={{ color: "green" }} key="h3">
        This is h3 tag
      </h3>
    </div>
  );
};
/*Create a Header Component from scratch using Functional Component with JSX
Add a Logo on Left
Add a search bar in middle
Add User icon on right
Add CSS to make it look nice*/
/*const t = () => {
    return(
        <>
        <header className="header">
            <div className="left">
                <img src={logo} alt="Logo" />
            </div>
            <div className="center">
                <input className="input" type="text" placeholder="Search anything you want..."/>
                <button type="submit">Submit</button>
            </div>
            <div className="right">
                <img src={userIcon} alt="User Icon"/>
            </div>
        </header>
        </>
    )
}*/
const heading = (
  <h1 id="h1" key="h1">
    This is JSX
  </h1>
);

// React Component 
// Functional component - new way of writing component 
// Class component - old way of writing component

// Title component is functional component
const Title = () => {
  return (
    <h1 id="title" key="title">Namaste React</h1>
  )
}
// Header component is functional component
const HeaderComponent = function (){
  return (
    <div>
      <Title/>
      {/* we can also use <Title()> */}
      {/* we can also use <Title></Title> */}
      {console.log(10)}
    <h1>Namaste React Functional component</h1>
    <h2>This is h2 tag</h2>
    </div>
  )
}
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<HeaderComponent/>);