import { Route, Switch } from 'react-router-dom';

import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';

import Layout from './components/layout/Layout';

const App = () => {
  return (
    <>
      <Layout>
        <Switch>
          <Route path='/' exact={true}>
            <AllMeetups />
          </Route>
          <Route path='/new-meetup'>
            <NewMeetup />
          </Route>
          <Route path='/favorites'>
            <Favorites />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
