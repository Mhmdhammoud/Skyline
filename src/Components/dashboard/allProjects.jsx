import React, {useEffect} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import Dashboard from './dashboard';

const allProjects = () => {
	const cookie = new Cookies('');
	const history = useHistory();
	useEffect(() => {
		const token = cookie.get('token');
		if (!token) {
			history.push('/admin/login');
		}
	}, []);
	return (
		<div>
			<Dashboard />
		</div>
	);
};

export default allProjects;
