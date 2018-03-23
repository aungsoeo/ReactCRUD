require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Master from './View/Master';
import CreateItem from './View/CreateItem';
import DisplayItem from './View/DisplayItem';
import EditItem from './View/EditItem';

render(
  	<Router history={browserHistory}>
      <Route path="/" component={Master} >
        <Route path="/add-item" component={CreateItem} />
        <Route path="/display-item" component={DisplayItem} />
        <Route path="/edit/:id" component={EditItem} />
      </Route>
    </Router>, document.getElementById('example')
);