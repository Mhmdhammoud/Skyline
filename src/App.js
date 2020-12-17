import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from './Components/Home';
import Porfolion from './Components/portfolio/index';
import Login from './Components/login/login';
import Dashboard from './Components/dashboard/dashboard';
import AddProject from './Components/dashboard/addProject';
import AllProjects from './Components/dashboard/allProjects';
function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/protfolio" component={Porfolion} />
					<Route exact path="/admin/login" component={Login} />
					<Route exact path="/admin/dashboard" component={Dashboard} />
					<Route exact path="/admin/all-project" component={AllProjects} />
					<Route exact path="/admin/add-project" component={AddProject} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
