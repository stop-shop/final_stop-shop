import React from 'react';

function GoodsLoading(Component) {
	return function GoodsLoadingComponent({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} />;
		return (
			<>
			<h2 className='wait'>Please Wait</h2>
			<div className="load">
				<hr /><hr /><hr /><hr />
			</div>
			<div className='space'>

			</div>
		</>
		);
	};
}
export default GoodsLoading;
