import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ParallaxProvider} from 'react-scroll-parallax';
import axios from 'axios';
axios.defaults.baseURL = 'https://skyline-backend.herokuapp.com/';
ReactDOM.render(
	<React.StrictMode>
		<ParallaxProvider>
			<App />
		</ParallaxProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
