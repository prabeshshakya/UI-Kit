import React from 'react';

import Filestructure from './Filestructure';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

const Intro = () => {
	return (
		<>
			<div className='row'>
				<div className='col'>
					<div className='page'>
						<div className='content-block'>
							<h2
								id='introduction'
								className='page__title'
							>
								Introduction
							</h2>
							<p className='lead-text'>Sass Starter kit intro.</p>
							<p>
								Sass (Syntactically Awesome Style Sheets) is a stylesheet
								language that gets compiled into css. It allows us to use
								variables, nested rules and more which is css compatible. Sass
								helps to organize large stylesheets and makes it easy to use
								within a project. You can find the detailed documentation of
								SASS in the given link
								<Link
									className='ml-1x'
									to='https://sass-lang.com/documentation'
									target='_blank'
								>
									sass-lang.com/documentation
								</Link>
							</p>
							<p>
								SCSS is also backward compatible. It can be used to write older
								version CSS as well.
							</p>
						</div>

						<div className='content-block'>
							<Filestructure />
						</div>
					</div>
				</div>
				<div className='col-2'>
					<Sidebar />
				</div>
			</div>
		</>
	);
};

export default Intro;
