import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
	container: {
		minHeight: '100vh',
		marginTop: theme.spacing(3),
	},
	servicesContainer: {
		textAlign: 'center',
	},
	servicesText: {
		fontSize: '16px',
		fontFamily: 'linotte-regular',
		width: theme.spacing(80),
		textAlign: 'justify',
	},
	servicesTextContainer: {
		display: 'flex',
		justifyContent: 'center',
	},
	cardsContainer: {
		display: 'flex',
		justifyContent: 'space-evenly',
		margin: 0,
		padding: 0,
	},
	serviceCard: {
		textAlign: 'center',
	},
	cardTitle: {
		fontSize: theme.spacing(3),
		fontFamily: 'linotte-regular',
	},
	cardText: {
		fontSize: theme.spacing(2),
		fontFamily: 'linotte-regular',
		marginTop: theme.spacing(2),
		textAlign: 'justify',
	},
}));
const partTwo = () => {
	const classes = useStyles();

	return (
		<Grid container className={classes.container} id="services">
			<Grid item xs={12} className={classes.servicesContainer}>
				<Typography variant="h2" style={{fontFamily: 'linotte-bold'}}>
					SERVICES
				</Typography>
			</Grid>
			<Grid item xs={12} className={classes.servicesTextContainer}>
				<Typography variant="h6" className={classes.servicesText}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
					deleniti laboriosam possimus, similique quasi explicabo ipsa labore
					repellat expedita suscipit, impedit quis distinctio? Rem aliquam
					accusantium nostrum? Blanditiis, id reiciendis. Lorem ipsum dolor sit
					amet, consectetur adipisicing elit. Dolore deleniti laboriosam
					possimus, similique quasi explicabo ipsa labore repellat expedita
					suscipit, impedit quis distinctio? Rem aliquam accusantium nostrum?
					Blanditiis, id reiciendis.
				</Typography>
			</Grid>
			<Grid item xs={12} className={classes.cardsContainer}>
				<Grid item xs={3} className={classes.serviceCard}>
					<h6>Construction image here</h6>
					<Typography variant="h3" className={classes.cardTitle}>
						Construction
					</Typography>
					<Typography variant="h3" className={classes.cardText}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
						asperiores accusamus ratione cupiditate ipsum repudiandae sunt autem
						optio exercitationem eum sequi ipsam, perspiciatis voluptas maxime
						cumque. Veritatis explicabo aut suscipit.
					</Typography>
				</Grid>
				<Grid item xs={3} className={classes.serviceCard}>
					<h6>Architecture image here</h6>
					<Typography variant="h3" className={classes.cardTitle}>
						Architecture
					</Typography>
					<Typography variant="h3" className={classes.cardText}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
						asperiores accusamus ratione cupiditate ipsum repudiandae sunt autem
						optio exercitationem eum sequi ipsam, perspiciatis voluptas maxime
						cumque. Veritatis explicabo aut suscipit.
					</Typography>
				</Grid>
				<Grid item xs={3} className={classes.serviceCard}>
					<h6>Expertise image here</h6>
					<Typography variant="h3" className={classes.cardTitle}>
						Expertise
					</Typography>
					<Typography variant="h3" className={classes.cardText}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
						asperiores accusamus ratione cupiditate ipsum repudiandae sunt autem
						optio exercitationem eum sequi ipsam, perspiciatis voluptas maxime
						cumque. Veritatis explicabo aut suscipit.
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default partTwo;
