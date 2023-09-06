import React from "react";
import { Syntax } from "../../../docs/syntax-highlighter";

const Folderstructure = () => {
  return (
    <div className="page">
      <div class="content-block">
        <h3 id="folderstructure">Folder Structure</h3>

        <div class="folder-preview">
          <div className="folder">
            src/
            <div className="folder">
              assets/
              <div className="folder">images/</div>
              <div className="folder">
                scss/
                <div className="folder">
                  base/
                  <div className="folder">__index.scss</div>
                  <div className="folder">_base.scss</div>
                  <div className="folder">_folder.scss</div>
                  <div className="folder">_normalize.scss</div>
                  <div className="folder">_typography.scss</div>
                </div>
                <div className="folder">
                  components/
                  <div className="folder">__index.scss</div>
                </div>
                <div className="folder">
                  layouts/
                  <div className="folder">__index.scss</div>
                  <div className="folder">_footer.scss</div>
                  <div className="folder">_header.scss</div>
                  <div className="folder">_sidebar.scss</div>
                </div>
                <div className="folder">
                  mixins/
                  <div className="folder">__index.scss</div>
                  <div className="folder">_bem.scss</div>
                  <div className="folder">_font-import-util.scss</div>
                  <div className="folder">_general.scss</div>
                  <div className="folder">_responsive.scss</div>
                  <div className="folder">_typography.scss</div>
                </div>
                <div className="folder">
                  utilities/
                  <div className="folder">
                    classes/
                    <div className="folder">__index.scss</div>
                    <div className="folder">_colors.scss</div>
                    <div className="folder">_grid.scss</div>
                    <div className="folder">_spacing.scss</div>
                    <div className="folder">_utilities.scss</div>
                  </div>
                  <div className="folder">
                    functions/
                    <div className="folder">
                      utils/
                      <div className="folder">__index.scss</div>
                      <div className="folder">_deep-map-check.scss</div>
                      <div className="folder">_deep-map-get.scss</div>
                      <div className="folder">_sdeep-map-merge.scss</div>
                      <div className="folder">_get.scss</div>
                      <div className="folder">_str-explode.scss</div>
                    </div>
                    <div className="folder">__index.scss</div>
                    <div className="folder">_helper/scss</div>
                    <div className="folder">_unit-utils</div>
                  </div>
                  <div className="folder">__index.scss</div>
                </div>
                <div className="folder">
                  variables/
                  <div className="folder">__index.scss</div>
                  <div className="folder">_color.scss</div>
                  <div className="folder">_config.scss</div>
                  <div className="folder">_easing.scss</div>
                  <div className="folder">_grid.scss</div>
                  <div className="folder">_spacing.scss</div>
                  <div className="folder">_typography.scss</div>
                  <div className="folder">_utilities.scss</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Folderstructure;
