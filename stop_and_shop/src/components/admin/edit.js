import React, { useState, useEffect, useRef } from 'react';
import axiosInstance from '../../axios';
import { useHistory, useParams } from 'react-router-dom';
//MaterialUI
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
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Create() {
    const valueRef = useRef('');
    const history = useHistory();
    const { id } = useParams();
    const initialFormData = Object.freeze({
        title: '',
        type: '',
        slug: '',
        description: '',
        category: '',
        owner: '',
        phone: '',
        email: '',
        address: '',
        price: '',
        image: '',
    });

    const [formData, updateFormData] = useState(initialFormData);

    useEffect(() => {
        axiosInstance.get('profile/edit/postdetail/' + id).then((res) => {
            updateFormData({
                ...formData,
                ['title']: res.data.title,
                ['type']: res.data.type,
                ['slug']: res.data.slug,
                ['description']: res.data.description,
                ['category']: res.data.category,
                ['owner']: res.data.owner,
                ['phone']: res.data.phone,
                ['email']: res.data.email,
                ['address']: res.data.address,
                ['price']: res.data.price,
                ['image']: res.data.image,
            });
            console.log(res.data);
        });
    }, [updateFormData]);

    const handleChange = (e) => {
        updateFormData({
            ...formData,

            [e.target.name]: e.target.value.trim(),
        });
        return ((valueRef.current.value))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        axiosInstance.put(`edit/` + id + '/', {
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
        });

        history.push({
            pathname: '/profile/',
        });
        window.location.reload();
    };

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Edit Service Or Good
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
                                inputRef={valueRef}
                                autoComplete="title"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="type"
                                label="type"
                                name="excerpt"
                                autoComplete="type"
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
                                id="description"
                                label="description"
                                name="description"
                                autoComplete="description"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
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
                        </Grid>
                        {/* <FormControl required className={classes.formControl}>
                            <InputLabel id="demo-simple-select-required-label">category</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                // value={id}
                                onChange={handleChange}
                                className={classes.selectEmpty}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Goods</MenuItem>
                                <MenuItem value={20}>Services</MenuItem>
                            </Select>
                            <FormHelperText>Required</FormHelperText>
                        </FormControl> */}
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
                        Update
					</Button>
                </form>
            </div>
        </Container>
    );
}