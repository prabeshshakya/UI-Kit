import React from 'react';
import { Syntax } from '../../../components/common/syntax-highlighter';

const Fonts = () => {
	const cssUsages = `
    //sass for generated class
    .title {
      @include m(largest) {
        font-size: getFontSize("32");
        font-weight: 700;
      }
      @include m(large) {
        font-size: getFontSize("20");
        font-weight: 700;
      }
      @include m(medium) {
        font-size: getFontSize("18");
        font-weight: 600;
      }
      @include m(small) {
        font-size: getFontSize("16");
        font-weight: 700;
      }
      @include m(smaller) {
        font-size: getFontSize("14");
        font-weight: 700;
      }
      @include m(smallest) {
        font-size: getFontSize("12");
        font-weight: 700;
      }
      @include m(dark) {
        color: getColor("black.base");
      }
    }
    `;

	const fontWeightUsages = `
    .font-weight {
        @include m(thin) {
          font-weight: getFontWeight("thin") !important;
        }
        @include m(normal) {
          font-weight: getFontWeight("normal") !important;
        }
        @include m(bold) {
          font-weight: getFontWeight("bold") !important;
        }
        @include m(bolder) {
          font-weight: getFontWeight("bolder") !important;
        }
      }
    `;

	return (
		<div className='page'>
			<div className='title-area'>
				<h2 className='page__title'>Fonts</h2>
				<p className='lead-text'>Here are few font usage listed below.</p>
				<div className='content-block'>
					<h4>getFontSize()</h4>
					<p className='page__brief'>
						This function is used to get the font size from the fontSize map dot
						notation as the key argument.
					</p>
					<p className='page__brief'>
						<strong>
							Syntax: getFontSize($key:””, $map:get(“font”,$fontSize))
						</strong>
					</p>
					<p className='page__brief'>
						Here <code>$key</code> is a required argument and $map is where it
						gets the font string key where it has various key with font-size and
						line-height nested key in it.
					</p>
				</div>
				<div className='doc-container'>
					<h4>CSS Usages</h4>
					<div className='code-preview'>
						<Syntax language='scss'>{cssUsages}</Syntax>
					</div>
				</div>
				<div className='content-block'>
					<h4>getFontWeight()</h4>
					<p className='page__brief'>
						This function is used to get the font-weight from the fontWeight map
						dot notation as the key argument.
					</p>
					<p className='page__brief'>
						<strong>Syntax: getFontWeight($key:””, $map:$fontWeight)</strong>
					</p>
					<p className='page__brief'>
						<code>$key</code> is required and $map is an optional argument.$key
						argument value should be provided from <code>_fonts.scss</code>{' '}
						files from the variable folder where the $fontWeight variable is
						declared.
					</p>
				</div>
				<div className='doc-container'>
					<h4>CSS Usages</h4>
					<div className='code-preview'>
						<Syntax language='scss'>{fontWeightUsages}</Syntax>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Fonts;
