import React from "react";
import { useSelector } from "react-redux";
import "98.css";

export function Backpack() {
  const inventory = useSelector((state) => state.inventory);
  const player = useSelector((state) => state.player);
  const playlist = useSelector((state) => state.playlist);
  const tools = [];
  for (const key in inventory) {
    let item = inventory[key];
    if (item.type === "tool") tools.push(item);
  }
  const awards = [];
  for (const key in inventory) {
    let item = inventory[key];
    if (item.type === "award") awards.push(item);
  }

  return (
    <div
      className={inventory.backpack ? "window" : "hide"}
      id="backpack-window"
    >
      <div className="title-bar">
        <div className="title-bar-text">Backpack</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>

      <div className="window-body" id="backpack-tree">
        <div id="tree">
          <ul className="tree-view">
            {player && <li>Discman</li>}
            {Boolean(awards.length) && (
              <li>
                Awards
                <ul>
                  {awards.map((award) => {
                    return <li key={award.id}>{award.name}</li>;
                  })}
                </ul>
              </li>
            )}

            {Boolean(tools.length) && (
              <li>
                Tools
                <ul>
                  {tools.map((tool) => {
                    return <li key={tool.id}>{tool.name}</li>;
                  })}
                </ul>
              </li>
            )}

            {Boolean(playlist.length) && (
              <li>
                CDs
                <ul>
                  {playlist.map((song) => {
                    return (
                      <li key={song.name.id}>
                        {song.name.name} by {song.name.artist}
                      </li>
                    );
                  })}
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
