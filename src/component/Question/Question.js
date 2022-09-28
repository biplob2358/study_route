import "./Question.css";

import React from "react";

const Question = () => {
  return (
    <div>
      <div>
        <div className="question-container">
          <h1>How React Works</h1>
          <h5>
            React mainly works on two packages which is React and React DOM.
            When we type any code in functional component or class based
            component, that remain as a pure javascript code. Pure JavaScript
            code converted into HTML by React package, which uses Babel
            Compiler.Because what we see on a webpage is HTML.Then React DOM
            package injects that converted code into index.html. That's how
            React works.
          </h5>
        </div>
        <div className="question-container">
          <h2>Props VS State in React</h2>
          <h5>
            In React props are used to pass data through one component to
            another component. But State used as managing data like modify and
            update. Props data is read only, we can't modify the data. State
            can't directly modify or update, we have to call setState() function
            to update the data and store in State. In case of Props we can only
            pass the data through parent to child components.State data can be
            updated by that's own component but cannot access from outside
            component.
          </h5>
        </div>
        <div className="question-container">
          <h2>How useEffect works in ReactJS ?</h2>
          <h5>
            When we want to perform something after each render of component
            then we can use the useEffect() hook. By using this Hook, we tell
            React that our component needs to do something after render by
            passing a function. React remember the function we passed in
            useEffect() hook and call it later after performing the DOM updates.
            By default, the useEffect hook runs after the first render and after
            every update. React updates the DOM by the time it runs the effects.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Question;
