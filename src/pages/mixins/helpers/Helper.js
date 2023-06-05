import React from 'react';
import { Syntax } from '../../../components/common/syntax-highlighter';

const Responsive = () => {
	const displayFlex = `
  @mixin display-flex($dir: "row", $align: null, $justify: null) {
    display: flex;
    flex-direction: $dir;
    @if ($align) {
      align-items: $align;
    }
    @if ($justify) {
      justify-content: $justify;
    }
  }
    `;

	const placeholderUsage = `
  @mixin placeholder{
    &::-webkit-input-placeholder {
      @content;
    }
    &:-moz-placeholder {
      @content;
    }
    &::-moz-placeholder {
      @content;
    }
    &:-ms-input-placeholder {
      @content;
    }
    &::placeholder {
      @content;
    }
  }
    `;
	const textShortenUsage = `
    @mixin text-shorten {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    `;

	return (
		<div className='page'>
			<div className='title-area'>
				<h2 className='page__title'>Helper</h2>
				<p className='lead-text'>
					We have few mixins which will help automating the writing of web
					styles.
				</p>

				<div className='content-block'>
					<h4>display-flex()</h4>
					<p className='page__brief'>
						This mixins helps in managing the layout, alignment with given
						parameter.
					</p>
					<p className='page__brief'>
						<strong>
							Syntax: display-flex($dir: "row", $align: null, $justify: null)
						</strong>
					</p>
					<p className='page__brief'>
						Here <code>$dir</code> represent <code>flex-direction</code> where
						you can provide
						<code>row, column, row-reverse and column-reverse</code> as a value.
						<code>$align</code> represent <code>align-items</code> where you can
						provide <code>center, flex-start and flex-end</code>. And lastly{' '}
						<code>$justify</code> represent <code>justify-content</code> and{' '}
						<code>space-around, space-between, space-evenly, flex-start</code>.
					</p>
				</div>
				<div className='doc-container'>
					<h4>CSS Usages</h4>
					<div className='code-preview'>
						<Syntax language='scss'>{displayFlex}</Syntax>
					</div>
				</div>

				{/* placeholder */}
				<div className='content-block'>
					<h4>placeholder</h4>
					<p className='page__brief'>
						This mixins is used for adding up styles for form input's
						placeholder.
					</p>
				</div>
				<div className='doc-container'>
					<h4>CSS Usages</h4>
					<div className='code-preview'>
						<Syntax language='scss'>{placeholderUsage}</Syntax>
					</div>
				</div>

				{/* text shorten */}
				<div className='content-block'>
					<h4>text-shorten</h4>
					<p className='page__brief'>
						This mixins performs truncation on any text that overflows its
						containing element and adds an ellipsis (…) to the end.
					</p>
				</div>
				<div className='doc-container'>
					<h4>CSS Usages</h4>
					<div className='code-preview'>
						<Syntax language='scss'>{textShortenUsage}</Syntax>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Responsive;
