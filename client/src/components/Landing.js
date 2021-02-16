import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import landing from '../assets/images/landing.jpg';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Typewriter from 'react-simple-typewriter';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%'
	},
	image: {
		backgroundImage: `url(${landing})`,
		width: '100%',
		height: '100vh',
		backgroundSize: 'cover',
		position: 'absolute',
		bottom: 0,
		backgroundPosition: 'center',
		zIndex: -5
	},
	overlay: {
		width: '100%',
		height: '100vh',
		zIndex: 5,
		backgroundColor: 'black',
		opacity: 0.3,
		position: 'absolute'
	},
	info: {
		'& h1': {
			fontSize: '7rem',
			fontWeight: 300,
			letterSpacing: 10,
			textShadow: '-4px -3px 5px rgba(150, 150, 150, 0.5)'
		},
		'& h4': {
			marginTop: 0,
			marginBottom: '40px',
			fontWeight: 200,
			letterSpacing: 10
		},
		display: 'flex',
		flexDirection: 'column',
		color: 'white',
		zIndex: 7,
		marginLeft: '8rem',
		[theme.breakpoints.down('sm')]: {
			marginTop: '5rem'
		}
	},
	button: {
		'& a': {
			textDecoration: 'none',
			color: 'white'
		}
	},
	container: {
		width: '100%',
		position: 'absolute',
		height: '100vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column'
		}
	},
	about: {
		zIndex: 7,
		alignSelf: 'flex-end',
		marginRight: '10rem'
	},
	card: {
		maxWidth: 345
	},
	cursor: {
		marginLeft: '13rem'
	},
	text: {
		marginLeft: '20rem'
	}
}));

function Landing() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.overlay} />
			<div className={classes.image} />
			<div className={classes.container}>
				<div className={classes.info}>
					<h1>
						<Typewriter typeSpeed={100} delaySpeed={1000} words={[ 'Emaily' ]} />
					</h1>
					<h4>
						Measure
						<br />
						<span className={classes.cursor}>
							<Typewriter
								loop
								cursor
								cursorStyle="_"
								typeSpeed={70}
								deleteSpeed={50}
								delaySpeed={1000}
								words={[ 'popularity', 'power', 'performance' ]}
							/>
						</span>
						<br />
						<span className={classes.text}>of your service</span>
					</h4>
				</div>
				<div className={classes.about}>
					<Card className={classes.card}>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								ABOUT
							</Typography>
							<Typography color="textSecondary" component="p">
								Emaily provides easy solution to collect feedback from your users about the services
								you've gave them. You can create surveys and send them to your users and ask them
								whether or not they liked your services
							</Typography>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default Landing;
