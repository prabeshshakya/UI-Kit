import React from "react";
import AlignContent from "./AlignContent";
import AlignItems from "./AlignItems";
import AlignSelf from "./AlignSelf";
import Direction from "./Direction";
import JustifyContent from "./JustifyContent";
import Order from "./Order";
import Sidebar from "./Sidebar";
import { Syntax } from "../../../docs/syntax-highlighter";
import Wrap from "./Wrap";

const Flex = () => {
  const flex = `<div className="d-flex"></div>`;

  return (
    <div className="row">
      <div className="col">
        <div className="page">
          <div className="title-area">
            <div className="content-block">
              <h2 className="page__title">Flex</h2>
              <p className="lead-text">
                Flex Property quickly manages the layout, alignment, and sizing
                of grid columns, navigation, components, and more with a full
                suite of responsive flexbox utilities.
              </p>
            </div>
          </div>

          <div className="content-block">
            <h4>Usage</h4>
            <Syntax language="html">{flex}</Syntax>
          </div>

          <div>
            <Direction />
          </div>

          <div>
            <Wrap />
          </div>

          <div>
            <JustifyContent />
          </div>
          <div>
            <AlignItems />
          </div>
          <div>
            <AlignSelf />
          </div>
          <div>
            <AlignContent />
          </div>
          <div>
            <Order />
          </div>
        </div>
      </div>
      <div className="col-2">
        <Sidebar />
      </div>
    </div>
  );
};

export default Flex;
