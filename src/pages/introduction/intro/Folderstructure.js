import React from "react";
import { Syntax } from "../../../docs/syntax-highlighter";

const Folderstructure = () => {
  return (
    <>
      <h3 id="folderstructure">Folder Structure</h3>

      <div class="folder-structure">
        <ul className="tree">
          <li>src/</li>
          <li className="has-subtree">
            <ul className="tree">
              <li>assets/</li>
              <li className="has-subtree">
                <ul className="tree">
                  <li>images/</li>
                  <li>scss/</li>

                  <li className="has-subtree">
                    <ul className="tree">
                      <li>base/</li>

                      <li className="has-subtree">
                        <ul className="tree">
                          <li>__index.scss</li>
                          <li>_base.scss</li>
                          <li>_folder.scss</li>
                          <li>_normalize.scss</li>
                          <li>_typography.scss</li>
                        </ul>
                      </li>
                      <li>components/</li>
                      <li className="has-subtree">
                        <ul className="tree">
                          <li>__index.scss</li>
                        </ul>
                      </li>
                      <li>layouts/</li>
                      <li className="has-subtree">
                        <ul className="tree">
                          <li>__index.scss</li>
                          <li>_footer.scss</li>
                          <li>_header.scss</li>
                          <li>_sidebar.scss</li>
                        </ul>
                      </li>
                      <li>mixins/</li>
                      <li className="has-subtree">
                        <ul className="tree">
                          <li>__index.scss</li>
                          <li>_bem.scss</li>
                          <li>_font-import-util.scss</li>
                          <li>_general.scss</li>
                          <li>_responsive.scss</li>
                          <li>_typography.scss</li>
                        </ul>
                      </li>
                      <li>utilities/</li>
                      <li className="has-subtree">
                        <ul className="tree">
                          <li>classes/</li>
                          <li className="has-subtree">
                            <ul className="tree">
                              <li>__index.scss</li>
                              <li>_bem.scss</li>
                              <li>_font-import-util.scss</li>
                              <li>_general.scss</li>
                              <li>_responsive.scss</li>
                              <li>_typography.scss</li>
                            </ul>
                          </li>
                          <li>functions/</li>
                          <li className="has-subtree">
                            <ul className="tree">
                              <li>utils/</li>
                              <li className="has-subtree">
                                <ul className="tree">
                                  <li>__index.scss</li>
                                  <li>_deep-map-check.scss</li>
                                  <li>_deep-map-get.scss</li>
                                  <li>_sdeep-map-merge.scss</li>
                                  <li>_get.scss</li>
                                  <li>_str-explode.scss</li>
                                </ul>
                              </li>
                              <li>__index.scss</li>
                              <li>_helper/scss</li>
                              <li>_unit-utils</li>
                            </ul>
                          </li>
                          <li>__index.scss</li>
                        </ul>
                      </li>
                      <li>variables/</li>
                      <li className="has-subtree">
                        <ul className="tree">
                          <li>__index.scss</li>
                          <li>_color.scss</li>
                          <li>_config.scss</li>
                          <li>_easing.scss</li>
                          <li>_grid.scss</li>
                          <li>_spacing.scss</li>
                          <li>_typography.scss</li>
                          <li>_utilities.scss</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Folderstructure;
