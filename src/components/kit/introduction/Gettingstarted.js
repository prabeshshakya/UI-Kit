import React from "react";
import { Syntax } from "../../common/syntax-highlighter";

const Gettingstarted = () => {
  return (
    <>
      <div className="page">
        <div className="title-area  mb--7x">
          <h2 className="page__title title--largest title--dark font-weight--thin mb--4x">
            Get Started
          </h2>
          {/* <p className="page__text">Information to get started</p> */}
          <p className="page__content">
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
                to run gem install sass and compile it by running sassc
                style.scss style.css.
              </li>
              <li>- A GUI app such as Hammer, CodeKit, or Compass.</li>
              <li>- By using libraries such as node-sass.</li>
            </ul>
          </p>
          <p>Which one to use?</p>
          <p className="page__list-paragraph">
            This depends on what kind of project you are doing. For large scale
            ecommerce codebases, Ruby Sass is a little slow when compiling large
            source sets. So it is better to use node-sass.
            <br />
            <br /> If you do not want to run the command line to compile sass
            everytime, it's better to use GUI. you can set them up to watch sass
            files so when you edit them they will compile it into css
            automatically.
          </p>
          <div className="content-block">
            <h3>Variables</h3>
            <p className="page__list-paragraph">
              Sass brings variables to CSS. Variables accept values as numbers,
              strings, colots, null, lists and maps.In this starter kit, the
              variables are declared in different partials inside the variables
              folder. So it is easier to find and edit the required variables as
              per the requirement of the projects. While setting up this starter
              kit in your project, most of the changes need to be done in this
              folder as per the requirements of your project. If you need to
              change primary color, secondary color e tc, you can go to the
              _colors.scss partial which is inside the variable folder and
              change it.
              <br />
              <br />
              For example: if you need to change the colors, you can change it
              in _colots.scss and so on. The changes in the variables will also
              affect the color map function for the color palette. The variables
              can be used directly as color: $primary-color;. To use the colors
              inside the color map, the getColor() function must be used.
            </p>
            <div className="content-block">
              <h4>Breakpoints</h4>
              <p className="page__list-paragraph">
                In this partial, only the variables for the breakpoints of
                different screen sizes are defined. To change the breakpoint,
                you can change the values.
              </p>
            </div>
            <div className="content-block">
              <h4>Colors</h4>
              <p className="page__list-paragraph">
                The color codes are stored in the variables inside the
                _color.scss partial. So you can change the colors as per the
                project requirement in this partial.
              </p>
            </div>
            <div className="content-block">
              <h4>Grid</h4>
              <p className="page__list-paragraph">
                The width of the container varies in projects. To set the width
                according to the requirements, the width can be set in the
                _grid.scss partial inside the variable folder.
              </p>
              <div className="code-block">
                <Syntax>
                  {
                    "$container-max-widths{sm:540px,md:720px,lg:1024px,xl:1224px}"
                  }
                </Syntax>
              </div>
            </div>
            <div className="content-block">
              <h4>Imports</h4>
              <p className="page__list-paragraph">
                There won't just be a Scss file in a project. The Scss files are
                created separately according to the requirements which are
                inside the basic file folder structure. Each folder contains a
                file named index.scss or _index.scss. The separate Scss files
                are all imported into the index.scss or _index.scss which are
                again imported inside the main Sass file which is then later
                compiled.
              </p>
              <p className="page__list-paragraph">
                Here, variable is a folder inside the folder structure. All of
                the Scss files in this folder are imported into _index.scss.
              </p>

              <p className="page__list-paragraph">
                And finally _index.scss file is imported into the main Scss file
                i.e. style.scss which is later compiled. SCSS files other than
                style.scss must always start with an ‘_’.
              </p>
            </div>
            <div className="content-block">
              <h4>Fonts</h4>
              <p className="page__list-paragraph">
                To change the fonts, if you have downloaded the fonts then you
                need to add the url of the css of the fonts inside the
                _fonts.scss inside the variable folder. You also need to change
                the value for $custom-font. You can also define the variables
                for font size, font weight in this partial.
              </p>
              <p className="page__list-paragraph">
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
