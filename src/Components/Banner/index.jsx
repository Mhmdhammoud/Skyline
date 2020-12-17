import React from 'react';
import LeftContainer from './leftContainer';
import RightContainer from './rightContainer';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
	root: {
		maxHeight: '100vh',
		borderBottom: '35px solid #dfa02a',
	},
}));
const container = () => {
	const classes = useStyles();
	return (
		<Grid container className={classes.root}>
			<LeftContainer />
			<RightContainer />
		</Grid>
	);
};

export default container;
