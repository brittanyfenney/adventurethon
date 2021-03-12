import React from "react";
import "98.css";

export function Backpack() {
  return (
    <div className={"window"}>
      <div className="title-bar">
        <div className="title-bar-text">Backpack</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>

      <div className="window-body" id="backpack-tree">
        <ul class="tree-view" >
          <li>
            Backpack
            <ul>
              <li>Selectors</li>
              <li>Specificity</li>
              <li>Properties</li>
              <li>Selectors</li>
              <li>Specificity</li>
              <li>Properties</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
