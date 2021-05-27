import React, { Component, ReactNode } from "react";
import { hot } from "react-hot-loader/root";
import { getRoute } from '../Service/RouteService';
import { Link } from "react-router-dom";

class DefaultView extends Component {
  render(): ReactNode {
    return <React.Fragment>
      <h1>Welcome page :_)</h1>
      <div>
        <p>Click on the button to get some tasks</p>
        <Link to={getRoute('listTasks')}>
          <button>Give me some tasks</button>
        </Link>
      </div>
    </React.Fragment>
  }
}

export default hot(DefaultView);
