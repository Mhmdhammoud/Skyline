import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {Typography} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Divider from '@material-ui/core/Divider';
import BuildingImg from '../../assets/building.png';
import {Parallax} from 'react-scroll-parallax';

const useStyles = makeStyles((theme) => ({
	root: {
		height: theme.spacing(120),
		padding: theme.spacing(4),
		marginLeft: theme.spacing(-15),
		// backgroundImage: 'linear-gradient(to top , white 70%, grey 100%)',
		justifyContent: 'flex-end',
		marginTop: theme.spacing(4),
	},
	projectName: {
		marginBottom: theme.spacing(3),
		width: '90%',
		color: '#707070',
	},
	projectDescription: {
		textAlign: 'justify',
		width: '400px',
	},
	divider: {
		marginTop: theme.spacing(2),
		width: '400px',
	},
	viewButton: {
		color: '#d99b39',
		marginLeft: theme.spacing(2),
	},
	img: {
		width: theme.spacing(75),
		height: theme.spacing(100),
		boxShadow: '10px 10px 43px -20px rgba(0,0,0,0.63)',
		borderRadius: theme.spacing(1),
	},
	viewProject: {
		marginTop: theme.spacing(5),
	},
}));
const ProjectCardRight = () => {
	const classes = useStyles();

	return (
		<Parallax className="custom-class" y={['10%', '0%']}>
			<Grid container alignItems="center" className={classes.root}>
				<Grid item xs={5}>
					<Typography variant="h4" className={classes.projectName}>
						Lorem Ipsum
					</Typography>
					<Typography variant="h6" className={classes.projectDescription}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ab,
						eos quibusdam accusantium animi rem laudantium quidem aperiam
						exercitationem vitae hic dolorem illo minima voluptas, beatae,
						perspiciatis tempore facere. Sapiente.
					</Typography>
					<Divider className={classes.divider} />
					<Grid
						item
						container
						justify="flex-start"
						alignItems="center"
						className={classes.viewProject}
					>
						<Link to="3" style={{textDecoration: 'none'}}>
							<Typography variant="h4" style={{color: '#d99b39'}}>
								View Project
							</Typography>
						</Link>
						<Link to="3">
							<NavigateNextIcon className={classes.viewButton} />
						</Link>
					</Grid>
				</Grid>
				<Grid xs={4}>
					<img src={BuildingImg} alt="" className={classes.img} />
				</Grid>
			</Grid>
		</Parallax>
	);
};

export default ProjectCardRight;
