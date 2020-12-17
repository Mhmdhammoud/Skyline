import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
	container: {
		minHeight: '100vh',
	},
	leftGrid: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	rightGrid: {
		marginTop: theme.spacing(25),
		padding: theme.spacing(3),
	},
	aboutext: {
		marginTop: theme.spacing(2),
		fontSize: '16px',
		fontFamily: 'linotte-regular',
	},
}));
const partOne = () => {
	const classes = useStyles();

	return (
		<Grid container className={classes.container} id="aboutus">
			<Grid item xs={6} className={classes.leftGrid}>
				skyline word here
			</Grid>
			<Grid item xs={5} className={classes.rightGrid}>
				<Typography variant="h3" style={{fontFamily: 'linotte-bold'}}>
					ABOUT US
				</Typography>
				<Typography variant="h6" className={classes.aboutext}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
					necessitatibus voluptas quibusdam nobis odit. Provident, nulla? Aut ad
					accusantium deleniti culpa, dolorem odit quas asperiores maiores, est
					commodi, facilis consequuntur. Lorem ipsum dolor sit amet consectetur,
					adipisicing elit. Velit Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Reiciendis deleniti at ipsa nisi delectus, ducimus,
					totam rerum provident.
				</Typography>
				<Typography variant="h6" className={classes.aboutext}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
					necessitatibus voluptas quibusdam nobis odit. Provident, nulla? Aut ad
					accusantium deleniti culpa, dolorem odit quas asperiores maiores, est
					commodi, facilis consequuntur. Lorem ipsum dolor sit amet consectetur,
					adipisicing elit. Velit Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Reiciendis deleniti at ipsa nisi delectus, ducimus,
					totam rerum provident.
				</Typography>
				<Typography variant="h6" className={classes.aboutext}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
					necessitatibus voluptas quibusdam nobis odit. Provident, nulla? Aut ad
					accusantium deleniti culpa, dolorem odit quas asperiores maiores, est
					commodi, facilis consequuntur. Lorem ipsum dolor sit amet consectetur,
					adipisicing elit. Velit Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Reiciendis deleniti at ipsa nisi delectus, ducimus,
					totam rerum provident.
				</Typography>
			</Grid>
		</Grid>
	);
};

export default partOne;
