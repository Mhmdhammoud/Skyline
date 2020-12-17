import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
	rightGrid: {
		marginTop: theme.spacing(14),
	},
	infoTitle: {
		fontFamily: 'linotte-bold',
		color: '#fff',
	},
	infoAddress: {
		fontFamily: 'linotte-bold',
		color: '#fff',
		marginTop: theme.spacing(4),
	},
	infoPhone: {
		fontFamily: 'linotte-bold',
		color: '#fff',
		marginTop: theme.spacing(3),
		textAlign: 'center',
	},
}));

const rightGrid = () => {
	const classes = useStyles();

	return (
		<Grid item xs={6} className={classes.rightGrid}>
			<Typography variant="h4" className={classes.infoTitle}>
				For more information
			</Typography>
			<Typography variant="h5" className={classes.infoAddress}>
				Abidjan - Zone 4 - Prime Center
			</Typography>
			<Typography variant="h6" className={classes.infoPhone}>
				(225) 89 69 03 80
			</Typography>
			<Typography variant="h6" className={classes.infoPhone}>
				(961) 71 666 351
			</Typography>
		</Grid>
	);
};

export default rightGrid;
