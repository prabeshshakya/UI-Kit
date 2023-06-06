import React from 'react';

const Filestructure = () => {
	return (
		<div className='page'>
			<div className='content-block'>
				<h2
					className='title'
					id='filestructure'
				>
					File Structure
				</h2>
				<p>
					Projects may be small or large. As the project grows bigger, we will
					have to write more css. In this case we create SCSS partials. The SCSS
					partial has the same file extension as the SASS file but the file name
					starts with an “_”. All the SCSS partials are imported in the main
					SASS file. Other SASS files can also be imported in the mail file.
					While compiling SASS into css all the sass files are converted. So the
					imported SCSS file gets compiled twice in the main SASS file and by
					itself. So to avoid the compiling of SCSS files into css twice or more
					we use SASS partials.
				</p>
				<p>
					If the partials are not managed properly then we will have a hard time
					finding the required partials which need to be changed. So if we
					manage the partials by making a basic structure, it will be much
					easier and the partials will be well managed.
				</p>
				<p>The basic file structure of this SASS Starter Kit is as follows.</p>
			</div>
			<div className='content-block'>
				{/* app */}
				<h3>app</h3>
				<p>
					This folder contains all the partials for the apps/pages that are in
					the projects. For example:
				</p>
				<ul>
					<li className='mb-1x'>
						<code>_app.scss</code>
					</li>
					<li className='mb-1x'>
						<code>_index.scss</code>
					</li>
					<li>
						<code>_about.scss</code>
					</li>
				</ul>
			</div>

			{/* base */}

			<div className='content-block'>
				<h3> base</h3>
				<p>
					This folder contains the partials for the styles that are common
					within a project.
				</p>

				<ul>
					<li>
						<span>
							<code>_base.scss</code>
						</span>
						<p>
							A base rule is applied to HTML elements using an element selector,
							a descendent selector, or a child selector, along with any
							pseudo-classes. We cannot reference any element defined here by
							their respective class or ID name. This defines the styling for
							how that element should look. Changes in style other than the
							default should be overwritten using other partials.
						</p>
					</li>
					<li>
						<span>
							<code>_index.scss</code>
						</span>
						<p>
							Each folder on the SMACSS architecture will have its own manifest
							partial. We import all the partials of the folder to its
							respective manifest partial. Then all manifest partials will be
							imported to the style.scss file.
						</p>
					</li>
					<li>
						<span>
							<code>_normalize.scss</code>
						</span>
						<p>
							Here we correct the line height in all the browsers, preventing
							adjustments of font size after orientations changes in iOS.
						</p>
					</li>
				</ul>
			</div>

			{/* component */}

			<div className='content-block'>
				<h3>
					component <div className='badge'>coming soon...</div>
				</h3>
				<p>
					This folder contains the partials for all the components that are used
					in a project like buttons, cards, avatar and more.
				</p>
				<ul>
					<li>
						<ul>
							<li>
								<code>_button.scss</code>

								<p>The css for buttons are written in this partial.</p>
							</li>
							<li>
								<code>_cards.scss</code>

								<p>
									The design of cards varies according to projects. So there is
									no default css for cards. The css for cards are written in
									this partial.
								</p>
							</li>
							<li>
								<code>_avatar.scss</code>

								<p>
									Avatar is the profile image of the user. To use the css for
									avatar, class “avatar” must be added to the div. For the
									rounded border avatar, avatar--round must be appended and for
									smaller avatar avatar--sm must be appender.
								</p>
							</li>
							<li>
								<code>_badge.scss</code>
							</li>
							<li>
								<code>_cssgrid.scss</code>
							</li>
							<li>
								<code>_footer.scss</code>
								<p>The css for footer of the app is written in this partial.</p>
							</li>
							<li>
								<code>_index.scss</code>
								<p>
									In this partial, all the other partials of the component
									folders are imported.
								</p>
							</li>
							<li>
								<code>_loader.scss</code>
								<p>
									Loader helps us to know if datas or the app is being loaded or
									not. So the css for the loader is written in this partial.
								</p>
							</li>
							<li>
								<code>_navbar.scss</code>
								<p>
									Navbar is also known as header. The css for the header is
									written in this partial.
								</p>
							</li>
							<li>
								<code>_navigation.scss</code>
							</li>
							<li>
								<code>_tabs.scss</code>
							</li>
							<li>
								<code>_components.scss</code>
							</li>
						</ul>
					</li>
				</ul>
			</div>

			{/* libs */}

			<div className='content-block'>
				<h3>libs</h3>
				<p>
					This folder contains the partials for all the third party libraries
					that are used in a project. For example: slick slider, date picker,
					phone number input with country flag and country code.
				</p>

				<ul>
					<li>
						<code>_slick.scss</code>
					</li>
					<li>
						<code>_datepicker.scss</code>
					</li>
				</ul>
			</div>

			{/* states */}

			<div className='content-block'>
				<h3>states</h3>
				<p>This folder contains the partials for different states.</p>

				<ul>
					<li>
						<code>_index.scss</code>
						<p>
							Just as any other index partials, all the partials in the folder
							is imported in this file.
						</p>
					</li>
					<li>
						<code>_print.scss</code>
						<p>
							Codes for the boilerplate for printing websites are written here.
						</p>
					</li>
					<li>
						<code>_state.scss</code>
						<p>
							A state is something that augments and overrides all other styles.
							States are used as object classes for existing elements.
						</p>
					</li>
				</ul>
			</div>

			{/* utilities */}

			<div className='content-block'>
				<h3>utilities</h3>
				<p>
					This folder contains the partials for classes, mixins and functions
					which are placed in their respective folders
				</p>
				<h5>Classes</h5>
				<ul>
					<li>
						<code>_colors.scss</code>
					</li>
					<li>
						<code>_flex-utils.scss</code>
					</li>
					<li>
						<code>_grid.scss</code>
					</li>
					<li>
						<code>_index.scss</code>
					</li>
					<li>
						<code>_spacing.scss</code>
					</li>
					<li>
						<code>_typography.scss</code>
					</li>
					<li>
						<code>_utils.scss</code>
					</li>
				</ul>
			</div>

			<div className='content-block'>
				<h5>Functions</h5>
				<ul>
					<li>
						<code>_deep-map-check.scss</code>
					</li>
					<li>
						<code>_deep-map-get.scss</code>
					</li>
					<li>
						<code>_deep-map-merge.scss</code>
					</li>
					<li>
						<code>_get.scss</code>
					</li>
					<li>
						<code>_index.scss</code>
					</li>
				</ul>
			</div>

			<div className='content-block'>
				<h5>mixins</h5>
				<ul>
					<li>
						<code>_bem.scss</code>
					</li>
					<li>
						<code>_font-import-util.scss</code>
					</li>
					<li>
						<code>_generals.scss</code>
					</li>
					<li>
						<code>_index.scss</code>
					</li>
					<li>
						<code>_responsive.scss</code>
					</li>
					<li>
						<code>_typography.scss</code>
					</li>
					<li>
						<code>_extends.scss</code>
					</li>
					<li>
						<code>_index.scss</code>
					</li>
				</ul>
			</div>

			{/* VARIABLES */}

			<div className='content-block'>
				<h3>Variables</h3>
				<p>This folder contains the partials for all the variables.</p>

				<ul>
					<li>
						<code>_breakpoint.scss</code>
						<p>
							In this partial, only the variables for the breakpoints of
							different screen sizes are defined.
						</p>
					</li>
					<li>
						<code> _color.scss</code>
						<p>The variables of the colors are defined in this partial.</p>
					</li>
					<li>
						<code>_config.scss</code>
						<p>Here you can define the variables, map, fonts and paths.</p>
					</li>
					<li>
						<code>_easing.scss</code>
						<p>
							In this partial, you can define the transition property for the
							transitions that are necessary for the project.
						</p>
					</li>
					<li>
						<code>_fonts.scss</code>
						<p>
							Here you can define the variables for font paths, font family,
							font sizes, font weight.
						</p>
					</li>
					<li>
						<code>_grid.scss</code>
						<p>
							In this partial, you can set the total number of grids, grid
							class, gutter width, grid breakpoints and container max widths.
						</p>
					</li>
					<li>
						<code>_index.scss</code>
						<p>
							Like in the index partial of the components folder, the index
							partial in the variable folder is also used to import other SASS
							partials in the variables folder.
						</p>
					</li>
					<li>
						<code>_spacing.scss</code>
						<p>Codes for the property of flex are defined in this partial.</p>
					</li>
				</ul>
			</div>

			{/* shame */}

			<div className='content-block'>
				<h3>Shame</h3>
				<ul>
					<li>
						<code> _shame.scss</code>
						<p>
							The codes here are written in a rush to meet the deadline or as a
							hack. There should be proper documentation for these codes as well
							and the codes should be cleaned up in spare time.
						</p>
					</li>
				</ul>
			</div>

			<div className='content-block'>
				<h3>Import all the styles partials</h3>
				<ul>
					<li>
						<code>_style.scss</code>
						<p>Here all the partials are imported from other folders.</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Filestructure;
