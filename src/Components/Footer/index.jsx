import React from 'react';
import Grid from '@material-ui/core/Grid';
import './style.css';
import {makeStyles} from '@material-ui/core/styles';
import LeftGrid from './leftGrid';
import RightGrid from './rightGrid';
const useStyles = makeStyles((theme) => ({}));
const footer = () => {
	const classes = useStyles();

	return (
		<Grid container className="root" justify="center">
			<LeftGrid />
			<RightGrid />
		</Grid>
	);
};

export default footer;
