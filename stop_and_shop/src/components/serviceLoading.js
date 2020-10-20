import React from 'react';

function ServiceLoading(Component) {
	return function ServiceLoadingComponent({ isLoading, ...props }) {
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
export default ServiceLoading;
