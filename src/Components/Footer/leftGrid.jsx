import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Typography, TextField} from '@material-ui/core';
import './style.css';
const useStyles = makeStyles((theme) => ({
	leftGrid: {
		marginTop: theme.spacing(12),
	},
	contactTitle: {
		fontFamily: 'linotte-regular',
	},
	TextField: {
		border: '2px solid #fff',
		'&>*::placeholder': {
			color: '#fff',
		},
	},
}));

const leftGrid = () => {
	const classes = useStyles();

	return (
		<Grid item xs={6} className={classes.leftGrid}>
			<Typography variant={classes.contactTitle}>Contact Us</Typography>
			<TextField
				required
				id="standard-required"
				label="Full Name"
				variant="standard"
				fullWidth
				className="text-field"
			/>
		</Grid>
	);
};

export default leftGrid;
