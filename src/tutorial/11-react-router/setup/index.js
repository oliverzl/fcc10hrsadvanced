import React from "react";
// react router
import {
  BrowserRouter as Router,
  Route,
  useRouteMatch,
  Switch,
  Link,
  useParams,
} from "react-router-dom"; //importing things from react-router which is needed in react-router
// pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
// navbar
import Navbar from "./Navbar";
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/person/:id" children={<Person />}></Route>
        {/* in the line above we use the reactrouter hook useParams(); with :id */}
        <Route path="/topics">
          <Topics />
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

const Topics = () => {
  let match = useRouteMatch();
  console.log(useRouteMatch());

  //matches the component with the route. above, since the path is /topics, the path and url values are both /topics
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route exact path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>

        {/* since the path of the route above is "/topics", we can also use {match.path} which evaluates to JUST /topics. */}
        <Route exact path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
};

const Topic = () => {
  let { topicId } = useParams();
  //useParams(); returns an object with a key value pair. the key is whatever is infront of the colon (:).
  console.log(useParams());
  //console.log(useParams()); logs {topicId:"props-v-state"} or {topicId: "components"}.
  return <h3>Requested topic ID: {topicId} </h3>;
}; //one singular topic, which changes based on the id which is part of the params, this is where we use the useParams hook

export default ReactRouterSetup;

//to use react router, we need to surround the entire APP INSIDE the Router tags: <Router> (APP inside here)  </Router>
//as we export this whole component as Setup in App.js, it is okay and it will still work. so
//in the 11-react-router folder, we split up all our components into different files, so that we can import them at the code on top.

//we surround routes with <Switch/>, and then we surround that with <Router/>. <Switch/> ensures that it only displays the first route that matches the browser bar URL.

//the switch functions just like switch in JS, so depending on which link the user clicks, react will then display different components. however, the <Navbar/> is OUTSIDE the <Switch/>, so <Navbar/> will be on the page ALWAYS regardless of which component is displayed, including the error page.
