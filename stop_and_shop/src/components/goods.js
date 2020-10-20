
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
	goodTitle: {
		fontSize: '16px',
		textAlign: 'left',
	},
	goodText: {
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'baseline',
		fontSize: '12px',
		textAlign: 'left',
		marginBottom: theme.spacing(2),
	},
}));

const Goods = (props) => {
	const { goods } = props;
	const classes = useStyles();
	if (!goods || goods.length === 0) return <p>Can not find any goods, sorry</p>;
	return (
		<React.Fragment>
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					{goods.filter(data => data.category === 'goods').map((good) => {
						return (
							// Enterprise card is full width at sm breakpoint
							<Grid item key={good.id} xs={12} md={4}>
								<Card className={classes.card}>
								<Link
										color="textPrimary"
										href={'/profile/' + good.id}
										className={classes.link}
									>
										<CardMedia
											className={classes.cardMedia}
											image="https://source.unsplash.com/random"
											title="Image title"
										/>
									</Link>
									<CardContent className={classes.cardContent}>
										<Typography
											gutterBottom
											variant="h6"
											component="h2"
											className={classes.goodTitle}
										>
											{good.title.substr(0, 100)}...
										</Typography>
										<div className={classes.goodText}>
											<Typography
												component="p"
												color="textPrimary"
											></Typography>
											<Typography variant="p" color="textSecondary">
												{good.tyPe.substr(0, 60)}...
											</Typography>
                                            </div>
                                            <div className={classes.goodText}>
											<Typography
												component="p"
												color="textPrimary"
											></Typography>
											<Typography variant="p" color="textSecondary">
												{good.phone.substr(0, 60)}
											</Typography>
										</div>
                                        <div className={classes.goodText}>
											<Typography
												component="p"
												color="textPrimary"
											></Typography>
											<Typography variant="p" color="textSecondary">
                                            price  {good.price.substr(0, 100)} jd  
											</Typography>
										</div>
										
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</React.Fragment>
	);
};
export default Goods;


// import React from 'react';

// function Goods() {
//   return (
//     <div className="App">
//         <h1>Goods Page </h1>
      
//     </div>
//   );
// }

// export default Goods;
