import React, { useState } from 'react';
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function Create() {
	function slugify(string) {
		const a =
			'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
		const b =
			'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
		const p = new RegExp(a.split('').join('|'), 'g');

		return string
			.toString()
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(p, (c) => b.charAt(a.indexOf(c)))
			.replace(/&/g, '-and-')
			.replace(/[^\w\-]+/g, '')
			.replace(/\-\-+/g, '-')
			.replace(/^-+/, '')
			.replace(/-+$/, '');
	}

	const history = useHistory();
	const initialFormData = Object.freeze({
		title: '',
		// type: '',
		slug: '',
		description: '',
		// category: '',
		owner: '',
		phone: '',
		email: '',
		address: '',
		price: '',
		image: '',
	});

	const [formData, updateFormData] = useState(initialFormData);
	const [type, setType] = React.useState('');

	const handleChange1 = (event) => {
		setType(event.target.value);
	};
	const [category, setCategory] = React.useState('');

	const handleChange2 = (event) => {
		setCategory(event.target.value);
	};
	const handleChange = (e) => {
		if ([e.target.name] == 'title') {
			updateFormData({
				...formData,
				[e.target.name]: e.target.value.trim(),
				['slug']: slugify(e.target.value.trim()),
			});
		} else {
			updateFormData({
				...formData,
				[e.target.name]: e.target.value.trim(),
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axiosInstance
			.post(`create/`, {
				title: formData.title,
				type: formData.type,
				slug: formData.slug,
				description: formData.description,
				category: formData.category,
				owner: 1,
				phone: formData.phone,
				email: formData.email,
				address: formData.address,
				price: formData.price,
				image: formData.image,
			})
			.then((res) => {
				history.push('/profile/');
			});
	};

	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					Create New Service Or Goods
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="title"
								label="Title"
								name="title"
								placeholder= {formData.title}
								autoComplete="title"
								onChange={handleChange}
							/>
						</Grid>
						{/* <Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="type"
								label="type"
								name="type"
								autoComplete="type"
								onChange={handleChange}
								multiline
								rows={4}
							/>
						</Grid> */}
						<FormControl required className={classes.formControl}>
							<InputLabel id="demo-simple-select-required-label">Type</InputLabel>
							<Select
								labelId="demo-simple-select-required-label"
								id="demo-simple-select-required"
								value={type}
								onChange={handleChange1}
								className={classes.selectEmpty}
							>
								<MenuItem value={10}>Cars</MenuItem>
								<MenuItem value={20}>Electronics</MenuItem>
								<MenuItem value={30}>Games</MenuItem>
								<MenuItem value={40}>Fashion</MenuItem>
								<MenuItem value={50}>Furniture</MenuItem>
								<MenuItem value={60}>Real Estate</MenuItem>
								<MenuItem value={70}>Food</MenuItem>
								<MenuItem value={80}>Equipment</MenuItem>
								<MenuItem value={90}>Books</MenuItem>
								<MenuItem value={100}>Pets</MenuItem>
								<MenuItem value={110}>Business</MenuItem>
								<MenuItem value={120}>Craftmenjobs</MenuItem>
								<MenuItem value={130}>Electrician</MenuItem>
								<MenuItem value={140}>Travel</MenuItem>
								<MenuItem value={150}>Medical</MenuItem>
								<MenuItem value={160}>Events</MenuItem>
								<MenuItem value={170}>Teaching</MenuItem>
								<MenuItem value={180}>Others</MenuItem>
							</Select>
							<FormHelperText>Required</FormHelperText>
						</FormControl>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="description"
								label="description"
								name="description"
								autoComplete="description"
								onChange={handleChange}
							/>
						</Grid>
						{/* <Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="category"
								label="category"
								name="category"
								autoComplete="category"
								onChange={handleChange}
								multiline
								rows={4}
							/>
						</Grid> */}
						<FormControl required className={classes.formControl}>
							<InputLabel id="demo-simple-select-required-label">category</InputLabel>
							<Select
								labelId="demo-simple-select-required-label"
								id="demo-simple-select-required"
								value={category}
								onChange={handleChange2}
								className={classes.selectEmpty}
							>
								<MenuItem value={10}>Goods</MenuItem>
								<MenuItem value={20}>Services</MenuItem>
							</Select>
							<FormHelperText>Required</FormHelperText>
						</FormControl>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="phone"
								label="phone"
								name="phone"
								autoComplete="phone"
								onChange={handleChange}
								multiline
								rows={4}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="email"
								name="email"
								autoComplete="email"
								onChange={handleChange}
								multiline
								rows={4}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="address"
								label="address"
								name="address"
								autoComplete="address"
								onChange={handleChange}
								multiline
								rows={4}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="price"
								label="price"
								name="price"
								autoComplete="price"
								onChange={handleChange}
								multiline
								rows={4}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="image"
								label="image"
								name="image"
								autoComplete="image"
								onChange={handleChange}
								multiline
								rows={4}
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Create
					</Button>
				</form>
			</div>
		</Container>
	);
}
