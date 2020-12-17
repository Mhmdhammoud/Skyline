import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	teamAvatar: {
		width: '30%',
		height: '35%',
	},
	teamName: {
		fontFamily: 'linotte-regular',
	},
	teamPosition: {
		fontFamily: 'linotte-regular',
		color: 'grey',
	},
	teamDesription: {
		fontFamily: 'linotte-regular',
		fontSize: theme.spacing(2.5),
		textAlign: 'justify',
	},
}));
const Card = ({name, position, description, img}) => {
	const classes = useStyles();
	return (
		<>
			<img src={img} alt="John Doe" className={classes.teamAvatar} />
			<Typography variant="h6" className={classes.teamName}>
				{name}
			</Typography>
			<Grid>
				<Typography className={classes.teamPosition}>{position}</Typography>
			</Grid>
			<Typography className={classes.teamDesription}>{description}</Typography>
		</>
	);
};

export default Card;
