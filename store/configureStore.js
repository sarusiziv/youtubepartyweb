import {createStore,compose,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import initial_state from '../reducers/initialState'

export default function configureStore()
{
	const middewares = [
		thunkMiddleware,
		];
	return createStore(rootReducer, initial_state, compose(
		applyMiddleware(...middewares)
	)
  );
}