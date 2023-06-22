import React from 'react';
import { Syntax } from '../../../components/common/syntax-highlighter';
import Sidebar from './Sidebar';

function Toolingsetup() {
	return (
		<>
			<div className='row'>
				<div className='col'>
					<div className='page'>
						<h2
							id='tooling-setup'
							className='page__title'
						>
							Tooling setup
						</h2>
						<p>
							To use our build system and run our documentation locally, you’ll
							need to install Node. Follow these steps and you should be ready
							to rock:
						</p>
						<ol type='1'>
							<li>
								<a
									href='https://nodejs.org/en/download'
									target='_blank'
									rel='noreferrer'
								>
									Download and install Node.js
								</a>
								, which we use to manage our dependencies.
							</li>
							<li>
								Clone the repo from github. (Contact Prabesh Shakya for github
								access.)
								<a
									className='ml-1x'
									href='https://github.com/prabeshshakya/UI-Kit'
									target='_blank'
									rel='noreferrer'
								>
									github.com/prabeshshakya/UI-Kit
								</a>
							</li>
							<li>
								Navigate to the root /UI-KIT directory and run npm install to
								install our local dependencies listed in package.json.
							</li>
						</ol>

						<div className='content-block'>
							<h4 id='npm'>npm</h4>
							<p className='page__list-paragraph'>Install with npm:</p>
							<div className='code-preview'>
								<Syntax language='properties'>$ npm install</Syntax>
							</div>
						</div>
						<div className='content-block'>
							<h4 id='yarn'>yarn</h4>
							<p className='page__list-paragraph'>Install with yarn:</p>
							<div className='code-preview'>
								<Syntax language='properties'>$ yarn install</Syntax>
							</div>
						</div>
						<div className='content-block'>
							<h4 id='npm-script'>Using npm scripts</h4>
							<p>
								Run npm run to see all the npm scripts in your terminal. Primary
								tasks include:
							</p>
							<table className='ui-html-table mt-4x mb-8x'>
								<thead>
									<th>Task</th>
									<th>Description</th>
								</thead>
								<tbody>
									<tr>
										<td>
											<code>npm start</code>
										</td>
										<td>
											Compiles CSS and JavaScript, builds the documentation, and
											starts a local server.
										</td>
									</tr>
									<tr>
										<td>
											<code>npm run dist</code>
										</td>
										<td>
											Creates the dist/ directory with compiled files. Requires
											Sass, Autoprefixer, and terser.
										</td>
									</tr>
									<tr>
										<td>
											<code>npm test</code>
										</td>
										<td>Runs tests locally after running npm run dist</td>
									</tr>
									<tr>
										<td>
											<code>npm run docs-serve</code>
										</td>
										<td>Builds and runs the documentation locally.</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<div className='col-2'>
					<Sidebar />
				</div>
			</div>
		</>
	);
}

export default Toolingsetup;
