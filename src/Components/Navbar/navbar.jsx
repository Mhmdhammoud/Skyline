import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import MainLogo from '../../assets/logo.png';
import {Link} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
	navBar: {
		display: 'flex',
		justifyContent: 'space-evenly',
		marginRight: theme.spacing(3),
		width: '30px',
		height: '96vh',
		alignItems: 'center',
		flexDirection: 'column',
		position: 'fixed',
		right: 0,
		zIndex: 10,
	},
	listItem: {
		listStyle: 'none',
		transform: 'rotate(90deg)',
		width: '100px',
	},
	linkValue: {
		color: '#d99b39',
		textDecoration: 'none',
		fontSize: '16px',
		fontFamily: 'linotte-regular',
	},
}));
const index = () => {
	const classes = useStyles();

	const links = [
		{text: 'About US', to: '/#aboutus'},
		{text: 'Portfolio', to: '/protfolio'},
		{text: 'Services', to: '/#services'},
	];
	return (
		<Grid className={classes.navBar}>
			{links ? (
				links.map((link, index) => {
					return (
						<li key={index} className={classes.listItem}>
							{link.text === 'Portfolio' ? (
								<Link to={`${link.to}`} className={classes.linkValue}>
									{link.text.toUpperCase()}
								</Link>
							) : (
								<a
									href={`${link.to}`}
									className={classes.linkValue}
									id={link.text}
								>
									{link.text.toUpperCase()}
								</a>
							)}
						</li>
					);
				})
			) : (
				<p>Loading</p>
			)}
		</Grid>
	);
};

export default index;
