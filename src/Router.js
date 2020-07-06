import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './component/Home';
import Page1 from './page/page1/Page1';
import Page2 from './page/page2/Page2';
export default function RouterAll () {
  return (
    <Router>
      <Home>
        <Switch>
          <Route path="/page1" component={Page1}></Route>
          <Route path="/page2" component={Page2}></Route>
        </Switch>
      </Home>
    </Router>
  )
}
