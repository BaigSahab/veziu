import logo from './logo.svg';
import './App.scss';
import { AnalyticsComponent, HeaderComponent, SideNavComponent } from './components';
import { Route, Router, Switch } from 'react-router-dom';
import history from './history';
import EventsComponent from './components/Events';

function App() {
  return (
    <>
      <Router history={history}>
        <HeaderComponent />
        <SideNavComponent />
        <div style={{ padding: "65px 0 0 35px", background: "#f5f5f5" }}>
          <Switch>
            <Route exact path="/">
              <AnalyticsComponent />
            </Route>
            <Route exact path="/events">
              <EventsComponent />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
