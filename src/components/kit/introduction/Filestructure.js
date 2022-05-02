import React from "react";

const Filestructure = () => {
  return (
    <div className="page">
      <div className="title-area  mb--7x">
        <h2
          className="page__title title--largest title--dark font-weight--thin mb--4x"
          id="filestructure"
        >
          File Structure
        </h2>
        <p className="page__content">
          Projects may be small or large. As the project grows bigger, we will
          have to write more css. In this case we create SCSS partials. The SCSS
          partial has the same file extension as the SASS file but the file name
          starts with an “_”. All the SCSS partials are imported in the main
          SASS file. Other SASS files can also be imported in the mail file.
          While compiling SASS into css all the sass files are converted. So the
          imported SCSS file gets compiled twice in the main SASS file and by
          itself. So to avoid the compiling of SCSS files into css twice or more
          we use SASS partials.
          <br />
          <br />
          If the partials are not managed properly then we will have a hard time
          finding the required partials which need to be changed. So if we
          manage the partials by making a basic structure, it will be much
          easier and the partials will be well managed.
          <br />
          <br />
          The basic file structure of this SASS Starter Kit is as follows.
        </p>
        <div className="page__brief">
          {/* app */}
          <ul>
            <li>
              <strong className="page__list-heading">app</strong>
              <p className="page__brief">
                This folder contains all the partials for the apps/pages that
                are in the projects. For example:
              </p>
              <ul>
                <li>_app.scss</li>
                <li>_index.scss</li>
                <li>_about.scss</li>
              </ul>
            </li>
          </ul>
          {/* base */}
          <ul>
            <li>
              <strong className="page__list-heading"> base</strong>
              <p className="page__brief">
                This folder contains the partials for the styles that are common
                within a project.
              </p>
              <ul>
                <li>
                  <span>_base.scss</span>
                  <p className="page__brief">
                    A base rule is applied to HTML elements using an element
                    selector, a descendent selector, or a child selector, along
                    with any pseudo-classes. We cannot reference any element
                    defined here by their respective class or ID name. This
                    defines the styling for how that element should look.
                    Changes in style other than the default should be
                    overwritten using other partials.
                  </p>
                </li>
                <li>
                  <span> _index.scss</span>
                  <p className="page__brief">
                    Each folder on the SMACSS architecture will have its own
                    manifest partial. We import all the partials of the folder
                    to its respective manifest partial. Then all manifest
                    partials will be imported to the style.scss file.
                  </p>
                </li>
                <li>
                  <span>_normalize.scss</span>
                  <p className="page__brief">
                    Here we correct the line height in all the browsers,
                    preventing adjustments of font size after orientations
                    changes in iOS.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
          {/* component */}
          <ul>
            <li>
              <strong className="page__list-heading">component</strong>
              <p className="page__brief">
                This folder contains the partials for all the components that
                are used in a project like buttons, cards, avatar and more.
              </p>
              <ul>
                <li>
                  <span>_button.scss</span>
                  <p className="page__brief">
                    The css for buttons are written in this partial.
                  </p>
                </li>
                <li>
                  <span> _cards.scss</span>
                  <p className="page__brief">
                    The design of cards varies according to projects. So there
                    is no default css for cards. The css for cards are written
                    in this partial.
                  </p>
                </li>
                <li>
                  <span>_avatar.scss</span>
                  <p className="page__brief">
                    Avatar is the profile image of the user. To use the css for
                    avatar, class “avatar” must be added to the div. For the
                    rounded border avatar, avatar--round must be appended and
                    for smaller avatar avatar--sm must be appender.
                  </p>
                </li>
                <li>
                  <span>_badge.scss</span>
                </li>
                <li>
                  <span>_cssgrid.scss</span>
                </li>
                <li>
                  <span>_footer.scss</span>
                  <p className="page__brief">
                    The css for footer of the app is written in this partial.
                  </p>
                </li>
                <li>
                  <span>_index.scss</span>
                  <p className="page__brief">
                    In this partial, all the other partials of the component
                    folders are imported.
                  </p>
                </li>
                <li>
                  <span>_loader.scss</span>
                  <p className="page__brief">
                    Loader helps us to know if datas or the app is being loaded
                    or not. So the css for the loader is written in this
                    partial.
                  </p>
                </li>
                <li>
                  <span>_navbar.scss</span>
                  <p className="page__brief">
                    Navbar is also known as header. The css for the header is
                    written in this partial.
                  </p>
                </li>
                <li>
                  <span>_navigation.scss</span>
                </li>
                <li>
                  <span>_tabs.scss</span>
                </li>
                <li>
                  <span>_components.scss</span>
                </li>
              </ul>
            </li>
          </ul>
          {/* libs */}
          <ul>
            <li>
              <strong className="page__list-heading">libs</strong>
              <p className="page__brief">
                This folder contains the partials for all the third party
                libraries that are used in a project. For example: slick slider,
                date picker, phone number input with country flag and country
                code.
              </p>
              <ul>
                <li>_slick.scss</li>
                <li>_datepicker.scss</li>
              </ul>
            </li>
          </ul>
          {/* states */}
          <ul>
            <li>
              <strong className="page__list-heading">states</strong>
              <p className="page__brief">
                This folder contains the partials for different states.
              </p>
              <ul>
                <li>
                  <span>_index.scss</span>
                  <p className="page__brief">
                    Just as any other index partials, all the partials in the
                    folder is imported in this file.
                  </p>
                </li>
                <li>
                  <span> _print.scss</span>
                  <p className="page__brief">
                    Codes for the boilerplate for printing websites are written
                    here.
                  </p>
                </li>
                <li>
                  <span>_state.scss</span>
                  <p className="page__brief">
                    A state is something that augments and overrides all other
                    styles. States are used as object classes for existing
                    elements.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
          {/* utilities */}
          <ul>
            <li>
              <strong className="page__list-heading">utilities</strong>
              <p className="page__brief">
                This folder contains the partials for classes, mixins and
                functions which are placed in their respective folders
              </p>
              <ul>
                <li>
                  <span>Classes</span>
                  <li>
                    <span>_colors.scss</span>
                  </li>
                  <li>
                    <span>_flex-utils.scss</span>
                  </li>
                  <li>
                    <span>_grid.scss</span>
                  </li>
                  <li>
                    <span>_index.scss</span>
                  </li>
                  <li>
                    <span>_spacing.scss</span>
                  </li>
                  <li>
                    <span>_typography.scss</span>
                  </li>
                  <li>
                    <span>_utils.scss</span>
                  </li>
                </li>
                <li>
                  <span>Functions</span>
                  <li>
                    <span>_deep-map-check.scss</span>
                  </li>
                  <li>
                    <span>_deep-map-get.scss</span>
                  </li>
                  <li>
                    <span>_deep-map-merge.scss</span>
                  </li>
                  <li>
                    <span>_get.scss</span>
                  </li>
                  <li>
                    <span>_index.scss</span>
                  </li>
                </li>
                <li>
                  <span>mixins</span>
                  <li>
                    <span>_bem.scss</span>
                  </li>
                  <li>
                    <span>_font-import-util.scss</span>
                  </li>
                  <li>
                    <span>_generals.scss</span>
                  </li>
                  <li>
                    <span>_index.scss</span>
                  </li>
                  <li>
                    <span>_responsive.scss</span>
                  </li>
                  <li>
                    <span>_typography.scss</span>
                  </li>
                </li>
                <li>
                  <span>_extends.scss</span>
                </li>
                <li>
                  <span>_index.scss</span>
                </li>
              </ul>
            </li>
          </ul>
          {/* VARIABLES */}
          <ul>
            <li>
              <strong className="page__list-heading">Variables</strong>
              <p className="page__brief">
                This folder contains the partials for all the variables.
              </p>
              <ul>
                <li>
                  <span>_breakpoint.scss</span>
                  <p className="page__brief">
                    In this partial, only the variables for the breakpoints of
                    different screen sizes are defined.
                  </p>
                </li>
                <li>
                  <span> _color.scss</span>
                  <p className="page__brief">
                    The variables of the colors are defined in this partial.
                  </p>
                </li>
                <li>
                  <span>_config.scss</span>
                  <p className="page__brief">
                    Here you can define the variables, map, fonts and paths.
                  </p>
                </li>
                <li>
                  <span>_easing.scss</span>
                  <p className="page__brief">
                    In this partial, you can define the transition property for
                    the transitions that are necessary for the project.
                  </p>
                </li>
                <li>
                  <span>_fonts.scss</span>
                  <p className="page__brief">
                    Here you can define the variables for font paths, font
                    family, font sizes, font weight.
                  </p>
                </li>
                <li>
                  <span>_grid.scss</span>
                  <p className="page__brief">
                    In this partial, you can set the total number of grids, grid
                    class, gutter width, grid breakpoints and container max
                    widths.
                  </p>
                </li>
                <li>
                  <span>_index.scss</span>
                  <p className="page__brief">
                    Like in the index partial of the components folder, the
                    index partial in the variable folder is also used to import
                    other SASS partials in the variables folder.
                  </p>
                </li>
                <li>
                  <span>_spacing.scss</span>
                  <p className="page__brief">
                    Codes for the property of flex are defined in this partial.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
          {/* shame */}
          <ul>
            <li>
              <strong className="page__list-heading"> _shame.scss</strong>
              <p className="page__brief">
                The codes here are written in a rush to meet the deadline or as
                a hack. There should be proper documentation for these codes as
                well and the codes should be cleaned up in spare time.
              </p>
            </li>
          </ul>
          <ul>
            <li>
              <strong className="page__list-heading"> _style.scss</strong>
              <p className="page__brief">
                Here all the partials are imported from other folders.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filestructure;
