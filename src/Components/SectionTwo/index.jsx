import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import './style.css';
// import SkyLine from '../../assets/'
import PartOne from './partOne';
import PartTwo from './partTwo';
import PartThree from './partThree';
const useStyles = makeStyles((theme) => ({
	wrapper: {
		minHeight: '300vh',
	},
	fontTest: {
		fontFamily: 'Linotte-bold',
	},
	leftGRid: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
}));
const index = () => {
	const classes = useStyles();
	return (
		<Grid className={(classes.wrapper, 'wrapper')}>
			<PartOne />
			<PartTwo />
		</Grid>
	);
};

export default index;
