import React from 'react';
import { Syntax } from '../../../docs/syntax-highlighter';
import Sidebar from './Sidebar';

const Helpers = () => {
	const bem = `//For Element
@mixin e($element) {
 &__#{$element} {
  @content;
 }
}

//For Modifier
@mixin m($modifier) {
 &--#{$modifier} {
  @content;
 }
}`;

	const bemUsage = `//Element
.nav {
 @include e(item) {
  ...
 }
}

//Output
.nav__item { ... }

//Modifier
.nav {
 @include e(item) {
  @include m(active) {
   ...
  }
 }
}

//Output
.nav__item--active {...}`;

	return (
		<div className='row'>
			<div className='col'>
				<div className='page'>
					<div className='title-area'>
						<h2
							id='bem'
							className='page__title'
						>
							BEM
						</h2>
						<p className='lead-text'>
							BEM &mdash; Block Element Modifier is a methodology that helps you
							to create reusable components and code sharing in front-end
							development. This mixins is located at{' '}
							<code>mixins/_bem.scss</code>
						</p>
						<div className='code-preview mb-5x'>
							<Syntax language='scss'>{bem}</Syntax>
						</div>

						<div className='doc-container'>
							<h4 id='usages'>Usage</h4>

							<div className='code-preview mb-5x'>
								<Syntax language='scss'>{bemUsage}</Syntax>
							</div>
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

export default Helpers;
