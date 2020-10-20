
import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import { useParams } from 'react-router-dom';
//MaterialUI


export default function Servs() {
	const { id } = useParams();

	const [data, setData] = useState({ servs: [] });

	useEffect(() => {
		axiosInstance.get(id).then((res) => {
			setData({ servs: res.data });
			console.log(res.data);
		});
	}, [setData]);

	return (
		<>
				<h2 id='titleh2'>{data.servs.title}</h2>
			<div id='cont'>
			<div className='single'>
				<p> prodact Description:{data.servs.description}</p>
				<p>Address : {data.servs.address}</p>
				<p>Price :{data.servs.price}</p>
				<p>Email :{data.servs.email}</p>
				<p>Phone Number:{data.servs.phone}</p>
			</div>
			<div className='single2'>
				<img src={data.servs.image} alt='no pic'></img>
			</div>
			</div>
		</>

	);
}