import React from "react";
import Setup from "./tutorial/11-react-router/setup";
// import Setup from "./testing";
// 11-react-router: importing the Component ReactRouterSetup as default import Setup from 11-react-router/setup/index.js

function App() {
  return (
    <div className='container'>
      <Setup />
    </div>
  );
}

export default App;

//fcc10hrsadvanced

//11-react-router: <Setup/> is a component from 11-react-router/setup called ReactRouterSetup, and it returns code SURROUNDED BY <Router> ... </Router> TAGS.
//11-react-router: importing <Setup /> will only take the file from index.js.
//the indexjs file is properly configured with react-router.
//it imports the App conponent, the App component is them exported into the index.js is the src file, and then the whole thing gets rendered.
