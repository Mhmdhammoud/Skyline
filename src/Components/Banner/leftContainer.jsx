import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MainBuildingImage from '../../assets/building.png';
const useStyles = makeStyles((theme) => ({
	container: {},
	mainBuilding: {
		width: '100%',
		maxHeight: '96vh',
	},
}));
const leftContainer = () => {
	const classes = useStyles();

	return (
		<Grid item xs={6} className={classes.container}>
			<img
				src={MainBuildingImage}
				alt="Main Building"
				className={classes.mainBuilding}
			/>
		</Grid>
	);
};

export default leftContainer;
