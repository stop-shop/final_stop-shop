import React, { useEffect, useState } from 'react';
import './App.css';
import Goods from './components/goods';
import GoodsLoadingComponent from './components/goodsLoading';

function Goods_1() {
	const GoodsLoading = GoodsLoadingComponent(Goods);
	const [appState, setAppState] = useState({
		loading: false,
		soods: null,
	});

	useEffect(() => {
		setAppState({ loading: true });
		const apiUrl = `https://finalshopbackend.herokuapp.com/api/`;
    fetch(apiUrl)
    // console.log(apiUrl)

			.then((data) => data.json())
			.then((goods) => {
        setAppState({ loading: false, goods: goods });
			});
	}, [setAppState]);
	return (
		<div className="App">
			<h1>Goods</h1>
			<GoodsLoading isLoading={appState.loading} goods={appState.goods} />
		</div>
	);
}
export default Goods_1;