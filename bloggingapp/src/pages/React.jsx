import React from "react";

function Reactblog() {
  const x = "React";

  return (
    <>
      <h1>
        {x} is a havascript library full of fancy terms. like
        reconciliation,composition , errorboundaries virtual dom , state ,
        routing , and th list goes on.
      </h1>
      <h2> But does that all mean???</h2>
      <h3> lets dive deep into the {x} universe and see what exists here,</h3>
      <h4>basically a react app is built up from </h4>

      <table>
        <tbody>
          <tr>
            <td>components</td>
            <td>jsx</td>
            <td>curly braces</td>
          </tr>
          <tr>
            <td>fragmants</td>
            <td>Props</td>
            <td>Children</td>
          </tr>
          <tr>
            <td>Keys</td>
            <td>Rendering</td>
            <td>Event Handling</td>
          </tr>
          <tr>
            <td>State</td>
            <td>Controlled Components</td>
            <td>Hooks</td>
          </tr>
          <tr>
            <td>Purity</td>
            <td>Strict Mode</td>
            <td>Effects</td>
          </tr>

          <tr>
            <td>Refs</td>
            <td>Context</td>
            <td>Portals</td>
          </tr>

          <tr>
            <td>Suspense</td>
            <td>Error Boundries</td>
            <td>and several other stuff which will be rarly used.</td>
          </tr>
        </tbody>
      </table>

      <h1>Component : 🧩</h1>
      <p> Components are the building blocks of a {x} app. </p>
      <p>
        {" "}
        Tey allow us to make all the visible part of our website / App like,
        buttons , searchbar , form , headers , footers , navbar , or even entire
        page. which , and the actuall key is each component can be used anywhere
        any number of times, see it like you wrote a piece of JSX code in a file
        , now u can use it wherever required , Sounds cool haah... and its cool
        , now imaging a giant project like amazon website lots of differnet
        pages lots of different compinents , humongous amount of navigation ,
        and many more stuff , to be written more over here ,
      </p>
      <p>components make code reusabilty more efficient.</p>

      <h1> JSX </h1>
      <p> </p>
    </>
  );
}

export default Reactblog;
