import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './docs/docs.scss';

import MainRouter from './routes';
import Nav from './components/navbar';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
	return (
		<>
			<Router>
				<Nav />
				<div className='container'>
					<div className='guide-wrapper row'>
						<div className='col-2'>
							<Sidebar />
						</div>
						<div className='col-10'>
							<MainRouter />
						</div>
					</div>
				</div>
			</Router>
		</>
	);
};

export default App;
