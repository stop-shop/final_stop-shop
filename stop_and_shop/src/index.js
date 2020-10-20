import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Service_1 from './service_1';
import Goods_1 from './goods_1';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/register';
import Login from './components/login';
import Logout from './components/logout';
import App from './App';
import Servs from './components/single';
import Gds from './components/goodDetails';
import Admin from './Admin';
import Create from './components/admin/create';
import Edit from './components/admin/edit';
import Delete from './components/admin/delete';
import Search from './components/search';


const routing = (
	<Router>
		<React.StrictMode>
			<Header />
			<Switch>
				<Route exact path="/search" component={Search} />
				<Route exact path="/" component={App} />
				<Route exact path="/profile" component={Admin} />
				<Route exact path="/profile/create/" component={Create} />
				<Route exact path="/profile/edit/:id" component={Edit} />
				<Route exact path="/profile/delete/:id" component={Delete} />
				<Route path="/service" component={Service_1} />
				<Route path="/goods" component={Goods_1} />
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<Route path="/logout" component={Logout} />
				<Route path="/profile/:id" component={Servs} />
				<Route path="/profile/:id" component={Gds} />
			</Switch>
			
			<Footer />
		</React.StrictMode>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
