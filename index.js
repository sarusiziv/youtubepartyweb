import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './store/configureStore';
const store = configureStore()
ReactDOM.render((
<MuiThemeProvider>
	<Provider store ={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
</MuiThemeProvider>
), document.getElementById('root'));


