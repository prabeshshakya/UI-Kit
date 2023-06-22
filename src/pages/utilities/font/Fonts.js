import React from 'react';
import { Syntax } from '../../../components/common/syntax-highlighter';
import Sidebar from './Sidebar';

const Fonts = () => {
	const code = `p {
 font-size: getFontSize('p');
}
`;
	return (
		<div className='row'>
			<div className='col'>
				<div className='page'>
					<div className='title-area'>
						<h2 className='page__title'>Fonts</h2>
						<p className='lead-text'>
							Documentation for font weight and font size.
						</p>

						<div className='content-block'>
							<h3 id='font-size'>Font Size</h3>
							<p className='page__brief'>
								We can use the font size utility to quickly change the font size
								of the text. Similar to the color variables, we have the array
								of variables defined for font sizes in the
								<code>variables/_typography.scss</code> file. In the
								<code>_typography.scss</code> file, we can find the list of
								objects defined for the different sizes. Then this object (
								<code>$fontSize</code>) is being used in different functions and
								mixins to apply font sizes as needed. We can add or remove font
								sizes from the variables files as required.
							</p>
							<p>
								We have the <code>getFontSize()</code> function to apply font
								size properties.
							</p>
						</div>

						<div className='content-block'>
							<h4>Usage</h4>
							<div className='usage-markup-preview'>
								<Syntax language='scss'>{code}</Syntax>
							</div>
						</div>

						<div className='content-block'>
							<h3 id='font-weight'>Font Weight</h3>
							<p className='page__brief'>
								We can quickly change the font-weight or font style of the text
								with these utilities. Similar to the color variables, we have
								the array of variables defined for font weights in the{' '}
								<code>variable/_typography.scss</code>
								file.In the <code>_typography.scss</code> file, we can find the
								list of objects defined for the different font weights. Then
								this object (<code>$fontWeight</code>) is being used in
								different functions and mixins to apply font weights as needed.
								We can add, remove, or customized font weights from the
								variables files as required.
							</p>
							<p>
								We have the <code>getFontWeight()</code> function to apply
								font-weight properties.
							</p>
						</div>
						<div className='content-block'>
							<h4>Usage</h4>
							<table className='table'>
								<thead>
									<tr>
										<th>ClassName</th>
										<th>Result</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<code>.fw-100</code>
										</td>
										<td>
											<span className='fw-100'>This text has 100 weight</span>
										</td>
									</tr>
									<tr>
										<td>
											<code>.fw-200</code>
										</td>
										<td>
											<span className='fw-200'>This text has 200 weight</span>
										</td>
									</tr>
									<tr>
										<td>
											<code>.fw-300</code>
										</td>
										<td>
											<span className='fw-300'>This text has 300 weight</span>
										</td>
									</tr>
									<tr>
										<td>
											<code>.fw-400</code>
										</td>
										<td>
											<span className='fw-400'>This text has 400 weight</span>
										</td>
									</tr>
									<tr>
										<td>
											<code>.fw-500</code>
										</td>
										<td>
											<span className='fw-500'>This text has 500 weight</span>
										</td>
									</tr>
									<tr>
										<td>
											<code>.fw-600</code>
										</td>
										<td>
											<span className='fw-600'>This text has 600 weight</span>
										</td>
									</tr>
									<tr>
										<td>
											<code>.fw-700</code>
										</td>
										<td>
											<span className='fw-700'>This text has 700 weight</span>
										</td>
									</tr>
									<tr>
										<td>
											<code>.fw-800</code>
										</td>
										<td>
											<span className='fw-800'>This text has 800 weight</span>
										</td>
									</tr>
									<tr>
										<td>
											<code>.fw-900</code>
										</td>
										<td>
											<span className='fw-900'>This text has 900 weight</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div className='content-block'>
							<h3 id='font-style'>Font Style</h3>
							<p className='page__brief'>
								We can quickly change the font-style of the text with these
								utilities.
							</p>

							<h4>Usage</h4>
							<table className='table'>
								<thead>
									<tr>
										<th>ClassName</th>
										<th>Result</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<code>.text-normal</code>
										</td>
										<td>
											<span className='text-normal'>This is normal text</span>
										</td>
									</tr>
									<tr>
										<td>
											<code>.text-italic</code>
										</td>
										<td>
											<span className='text-italic'>This is italic text</span>
										</td>
									</tr>
									<tr>
										<td>
											<code>.text-oblique</code>
										</td>
										<td>
											<span className='text-oblique'>This is oblique text</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div className='content-block'>
							<h3 id='text-transform'>Text Transform</h3>
							<p className='page__brief'>
								We can quickly change the text transform of the text with these
								utilities.
							</p>

							<h4>Usage</h4>
							<table className='table'>
								<thead>
									<tr>
										<th>ClassName</th>
										<th>Result</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<code>.text-uppercase</code>
										</td>
										<td>
											<span className='text-uppercase'>
												This is uppercase text
											</span>
										</td>
									</tr>
									<tr>
										<td>
											<code>.text-lowercase</code>
										</td>
										<td>
											<span className='text-lowercase'>
												This is lowercase text
											</span>
										</td>
									</tr>
									<tr>
										<td>
											<code>.text-capitalize</code>
										</td>
										<td>
											<span className='text-capitalize'>
												This is capitalize text
											</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div className='content-block'>
							<h3 id='text-utilities'>Text Utilities</h3>
							<p className='page__brief'>
								We can quickly change the text utils of the text with these
								utilities.
							</p>

							<h4>Usage</h4>
							<table className='table'>
								<thead>
									<tr>
										<th>ClassName</th>
										<th>Result</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<code>.text-center</code>
										</td>
										<td>
											<span className='text-center d-block'>
												This is center text
											</span>
										</td>
									</tr>
									<tr>
										<td>
											<code>.text-left</code>
										</td>
										<td>
											<span className='text-left d-block'>
												This is left text
											</span>
										</td>
									</tr>
									<tr>
										<td>
											<code>.text-right</code>
										</td>
										<td>
											<span className='text-right d-block'>
												This is right text
											</span>
										</td>
									</tr>
									<tr>
										<td>
											<code>.text-justify</code>
										</td>
										<td>
											<span className='text-justify d-block'>
												This is justify text
											</span>
										</td>
									</tr>
									<tr>
										<td>
											<code>.text-underline</code>
										</td>
										<td>
											<span className='text-underline d-block'>
												This is underline text
											</span>
										</td>
									</tr>
									<tr>
										<td>
											<code>.text-striked</code>
										</td>
										<td>
											<span className='text-striked d-block'>
												This is striked text
											</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div className='col-2'>
				<Sidebar />
			</div>
		</div>
	);
};

export default Fonts;
