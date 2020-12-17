import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import MainLogo from '../../assets/logo.png';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar/navbar';
import './porfolio.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import FooterBar from '../../assets/Rectangle 57.png';
import ProjectCardLeft from './projectCardLeft';
import ProjectCardRight from './projectCardRight';
import InfiniteScroll from 'react-infinite-scroller';
const useStyles = makeStyles((theme) => ({
	icons: {
		color: '#d99b39',
		marginRight: theme.spacing(2),
		marginBottom: theme.spacing(5),
	},
	loader: {
		position: 'inherit',
	},
}));
const index = () => {
	const classes = useStyles();

	return (
		<React.Fragment style={{height: '700px', overflow: 'auto'}}>
			<Navbar />
			<Grid
				xs={12}
				container
				justify="center"
				alignItems="flex-end"
				className="porfolio-banner"
			>
				<InstagramIcon className={classes.icons} />
				<FacebookIcon className={classes.icons} />
				<TwitterIcon className={classes.icons} />
			</Grid>
			<img src={FooterBar} alt="" />

			<InfiniteScroll
				pageStart={0}
				loadMore={() => console.log('scrolled')}
				hasMore={true || false}
				loader={
					<div className={classes.loader} key={0}>
						Loading ...
					</div>
				}
				useWindow={true}
			>
				<ProjectCardLeft />
				<ProjectCardRight />
				<ProjectCardLeft />
				<ProjectCardRight />
			</InfiniteScroll>
		</React.Fragment>
	);
};

export default index;
