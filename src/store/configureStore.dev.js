import {
	createStore,
	applyMiddleware,
	compose
} from 'redux';
import {
	persistState
} from 'redux-devtools';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../components/DevTool';


const enhancer = compose(
	applyMiddleware(thunk),
	DevTools.instrument(),
	persistState(
		window.location.href.match(
			/[?&]debug_session=([^&#]+)\b/
		)
	)
);

const configureStore = initalState => {
	const store = createStore(rootReducer, initalState, enhancer);
	if (module.hot) {
		module.hot.accept('../reducers', () =>
			store.replaceReducer(require('../reducers').default)
		);
	}
	return store;
}

module.exports = configureStore;