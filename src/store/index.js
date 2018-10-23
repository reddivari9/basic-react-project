import { createStore } from 'redux';
import createHistory from 'history/createBrowserHistory';

import reducers from '../reducers';

export const history = createHistory()

const store = createStore(reducers)

export default store;

