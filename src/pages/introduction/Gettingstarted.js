import React from 'react';
import { Syntax } from '../../components/common/syntax-highlighter';

const Gettingstarted = () => {
	return (
		<>
			<div className='page'>
				<div className='title-area'>
					<h2 className='page__title'>Get Started</h2>
					{/* <p className="page__text">Information to get started</p> */}
					<p className='page__content'>
						Sass is a CSS preprocessor. Sass adds a feature set to your
						stylesheet markup that makes writing fun again.
						<br />
						<br />
						As we know, the browser cannot read the codes written in Sass
						directly. So we need to convert the codes written in Sass into CSS.
						There are several ways to compile Sass.
						<ul>
							<li>
								- The original Ruby Sass binary: To install ruby sass, we need
								to run
								<code>
									<em>gem install sass</em>
								</code>{' '}
								and compile it by running sassc <code>style.scss</code>{' '}
								<code>style.css</code>.
							</li>
							<li>- A GUI app such as Hammer, CodeKit, or Compass.</li>
							<li>- By using libraries such as node-sass.</li>
						</ul>
					</p>
					<p>Which one to use?</p>
					<p className='page__list-paragraph'>
						This depends on what kind of project you are doing. For large scale
						ecommerce codebases, Ruby Sass is a little slow when compiling large
						source sets. So it is better to use node-sass.
						<br />
						<br /> If you do not want to run the command line to compile sass
						everytime, it's better to use GUI. you can set them up to watch sass
						files so when you edit them they will compile it into css
						automatically.
					</p>
					<div className='content-block'>
						<h3>Variables</h3>
						<p className='page__list-paragraph'>
							Sass brings variables to CSS. Variables accept values as numbers,
							strings, colors, null, lists and maps. In this starter kit, the
							variables are declared in different partials inside the variables
							folder. So it is easier to find and edit the required variables as
							per the requirement of the projects. While setting up this starter
							kit in your project, most of the changes need to be done in this
							folder as per the requirements of your project. If you need to
							change primary color, secondary color etc, you can go to the{' '}
							<code>_colors.scss</code> partial which is inside the variable
							folder and change it.
							<br />
							<br />
							For example: if you need to change the colors, you can change it
							in <code>_colors.scss</code> and so on. The changes in the
							variables will also affect the color map function for the color
							palette. The variables can be used directly as{' '}
							<code>color: $primary-color;</code>. To use the colors inside the
							color map, the <code>getColor()</code> function must be used.
						</p>
						<div className='content-block'>
							<h4>Breakpoints</h4>
							<p className='page__list-paragraph'>
								In this partial, only the variables for the breakpoints of
								different screen sizes are defined. To change the breakpoint,
								you can change the values.
							</p>
						</div>
						<div className='content-block'>
							<h4>Colors</h4>
							<p className='page__list-paragraph'>
								The color codes are stored in the variables inside the{' '}
								<code>_color.scss</code> partial. So you can change the colors
								as per the project requirement in this partial.
							</p>
						</div>
						<div className='content-block'>
							<h4>Grid</h4>
							<p className='page__list-paragraph'>
								The width of the container varies in projects. To set the width
								according to the requirements, the width can be set in the{' '}
								<code>_grid.scss</code> partial inside the variable folder.
							</p>
							<div className='code-preview'>
								<Syntax>
									{`
									$container-max-widths{
										sm:540px,
										md:720px,
										lg:1024px,
										xl:1224px
									}
									`}
								</Syntax>
							</div>
						</div>
						<div className='content-block'>
							<h4>Imports</h4>
							<p className='page__list-paragraph'>
								There won't just be a Scss file in a project. The Scss files are
								created separately according to the requirements which are
								inside the basic file folder structure. Each folder contains a
								file named <code>index.scss</code> or <code>_index.scss</code>.
								The separate Scss files are all imported into the{' '}
								<code>index.scss</code> or <code>_index.scss</code> which are
								again imported inside the main Sass file which is then later
								compiled.
							</p>
							<p className='page__list-paragraph'>
								Here, variable is a folder inside the folder structure. All of
								the Scss files in this folder are imported into{' '}
								<code>_index.scss</code>.
							</p>

							<p className='page__list-paragraph'>
								And finally <code>_index.scss</code> file is imported into the
								main Scss file i.e. <code>style.scss</code> which is later
								compiled. SCSS files other than <code>style.scss</code> must
								always start with an ‘_’.
							</p>
						</div>
						<div className='content-block'>
							<h4>Fonts</h4>
							<p className='page__list-paragraph'>
								To change the fonts, if you have downloaded the fonts then you
								need to add the url of the css of the fonts inside the{' '}
								<code>_fonts.scss</code> inside the variable folder. You also
								need to change the value for <code>$custom-font</code>. You can
								also define the variables for <strong>font size</strong>, font
								weight in this partial.
							</p>
							<p className='page__list-paragraph'>
								The downloaded fonts should be placed in a separate folder
								inside the asset folder.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Gettingstarted;
