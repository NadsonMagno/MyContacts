
import {Switch, Route} from 'react-router-dom';

import HomePage from '../Pages/Home/Home';
import NewContact from '../Pages/NewContact/NewContact';
import EditContact from '../Pages/Edit/EditContact';


export default function Routes() {

  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/new' component={NewContact} />
      <Route exact path='/edit/:id' component={EditContact} />
    </Switch>
  );
}
