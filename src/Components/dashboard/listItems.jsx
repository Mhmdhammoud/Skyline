import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import {useHistory} from 'react-router-dom';

const mainListItems = () => {
	const history = useHistory();
	return (
		<div>
			<ListItem button onClick={() => history.push('/admin/all-project')}>
				<ListItemIcon>
					<HomeWorkIcon />
				</ListItemIcon>
				<ListItemText primary="All Projects" />
			</ListItem>
			<ListItem button onClick={() => history.push('/admin/add-project')}>
				<ListItemIcon>
					<AddIcon />
				</ListItemIcon>
				<ListItemText primary="Add Project" />
			</ListItem>
		</div>
	);
};
export default mainListItems;
