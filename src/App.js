import React from 'react';
import MyHeader from "./components/MyHeader";
import {Comp1, Comp2, Home} from "./screens/Home";
import {BrowserRouter as Router, Route} from "react-router-dom";
import MyFooter from "./components/MyFooter";

function App() {
  return (
      <Router>
          <MyHeader/>
          <div style={{paddingTop:100}} className="container modal-body">
              <Route path="/" exact component={Home} />
              <Route path="/1" exact component={Comp1} />
              <Route path="/2" exact component={Comp2} />
              <MyFooter/>
          </div>
      </Router>
  );
}

export default App;
