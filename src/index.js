import ReactDOM from 'react-dom'
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import './index.css'
import './style.css'
import MobilePAGE1 from './views/mobile-page1'
import MobilePAGE2 from './views/mobile-page2'
import MobilePAGE3 from './views/mobile-page3'
import MobilePAGE4 from './views/mobile-page4'
import MobilePAGE5 from './views/mobile-page5'
import MobilePAGE6 from './views/mobile-page6'
import NotFound from './views/not-found'
import WebPAGE1 from './views/web-page1'
import WebPAGE2 from './views/web-page2'
import WebPAGE3 from './views/web-page3'
import WebPAGE4 from './views/web-page4'
import WebPAGE5 from './views/web-page5'
import WebPAGE6 from './views/web-page6'
import WebPAGE7 from './views/web-page7'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={WebPAGE4} exact path="/web-page4" />
        <Route component={WebPAGE2} exact path="/web-page2" />
        <Route component={MobilePAGE5} exact path="/mobile-page5" />
        <Route component={MobilePAGE6} exact path="/mobile-page6" />
        <Route component={MobilePAGE2} exact path="/mobile-page2" />
        <Route component={MobilePAGE3} exact path="/mobile-page3" />
        <Route component={MobilePAGE4} exact path="/mobile-page4" />
  <Route component={WebPAGE7} exact path="/web-page7" />
  <Route component={WebPAGE6} exact path="/web-page6" />
        <Route component={WebPAGE1} exact path="/" />
        <Route component={WebPAGE5} exact path="/web-page5" />
        <Route component={MobilePAGE1} exact path="/mobile-page1" />
        <Route component={WebPAGE3} exact path="/web-page3" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
