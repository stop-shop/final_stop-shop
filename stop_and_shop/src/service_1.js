import React, { useEffect, useState } from 'react';
import './App.css';
import Services from './components/service';
import ServiceLoadingComponent from './components/serviceLoading';

function Service_1() {
	const ServiceLoading = ServiceLoadingComponent(Services);
	const [appState, setAppState] = useState({
		loading: false,
		services: null,
	});

	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = `https://finalshopbackend.herokuapp.com/api/`;
    fetch(apiUrl)
    // console.log(apiUrl)

			.then((data) => data.json())
			.then((services) => {
        setAppState({ loading: false, services: services });
			});
	}, [setAppState]);
	return (
		<div className="App">
			<h1>Services</h1>
			<ServiceLoading isLoading={appState.loading} services={appState.services} />
		</div>
	);
}
export default Service_1;