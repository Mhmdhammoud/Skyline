import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import {Team} from '../../Data/team';
import Card from './Card';
const useStyles = makeStyles((theme) => ({
	container: {
		minHeight: '100vh',
		marginTop: theme.spacing(-24),
	},
	ourTeamTitle: {
		fontFamily: 'linotte-bold',
	},
	teamCardContainer: {
		textAlign: 'center',
		padding: theme.spacing(4),
		marginTop: theme.spacing(-48),
		margin: theme.spacing(3),
		height: theme.spacing(40),
		border: '2px solid #c4c4c4',
	},
	titleContainer: {
		textAlign: 'center',
	},
}));
const partThree = () => {
	const classes = useStyles();

	return (
		<Grid
			container
			className={classes.container}
			justify="center"
			alignItems="center"
		>
			<Grid xs={12} className={classes.titleContainer}>
				<Typography variant="h3" className={classes.ourTeamTitle}>
					OUR TEAM
				</Typography>
			</Grid>
			{Team ? (
				Team.map((element, index) => {
					return (
						<Grid xs={3} className={classes.teamCardContainer} key={index}>
							<Card
								name={element.name}
								position={element.position}
								description={element.description}
								img={element.img}
							/>
						</Grid>
					);
				})
			) : (
				<p>Loading team</p>
			)}
		</Grid>
	);
};

export default partThree;
