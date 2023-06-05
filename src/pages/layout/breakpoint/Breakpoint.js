import React from 'react';
import { Syntax } from '../../../components/common/syntax-highlighter';

const Breakpoints = () => {
	const breakpoints = `
$sm-device: 576px; 
$md-device: 768px; 
$lg-device: 992px; 
$xl-device: 1200px;
		`;

	const mobileFirstBreakpoints = `
@include mq('sm') {...}
@include mq('md') {...}
@include mq('xl') {...}
@include mq('xxl') {...}
	`;

	const desktopFirstBreakpoints = `
@include mqmax('sm') {...}
@include mqmax('md') {...}
@include mqmax('xl') {...}
@include mqmax('xxl') {...}
	`;

	return (
		<div className='page'>
			<div className='title-area'>
				<h2 className='page__title'>Breakpoints</h2>

				<p>
					These breakpoints are customizable via Sass—you’ll find them in a Sass
					map in our <code>variables/_breakpoints.scss</code> stylesheet and{' '}
					<strong>mixins</strong> are available in our{' '}
					<code>utilities/_utilities.scss</code>
				</p>

				<div className='code-preview mb-5x'>
					<Syntax language='scss'>{breakpoints}</Syntax>
				</div>

				<div className='doc-container'>
					<h4>Basic Usage</h4>
					<p className='page__brief mb-4x'>
						In-order to use this <strong>mediaquery</strong> we have two way
						approches.
					</p>

					<h4>Min width (Mobile First approach)</h4>

					<div className='code-preview mb-5x'>
						<Syntax language='scss'>{mobileFirstBreakpoints}</Syntax>
					</div>

					<h4>Max width (Desktop First approach)</h4>

					<div className='code-preview mb-5x'>
						<Syntax language='scss'>{desktopFirstBreakpoints}</Syntax>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Breakpoints;
