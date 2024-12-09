import React, { useEffect, useState } from "react";
import Player from "./Player/Player";
import Selected from "./Selected";

const AvailablePlayers = ({ players, handleActive, isActive,handleSelected,selectedPlayer,handleDelete}) => {
  console.log(isActive);
  return (
    <div>
      <div>
        <div className="flex justify-between items-center my-5">
          <h1 className="font-bold">Available Player</h1>
          <div className="space-x-2">
            <button
              onClick={() => handleActive("cart")}
              className={`${isActive.cart ? "btn bg-blue-400" : "btn"}`}
            >
              Available
            </button>
            <button
              onClick={() => handleActive("selected")}
              className={`${isActive.cart ? "btn" : "btn bg-blue-400"}`}
            >
              Selected ({selectedPlayer.length})
            </button>
          </div>
        </div>
        {isActive.cart ? (
          <Player handleSelected={handleSelected} players={players}></Player>
        ) : (
          <Selected isActive={isActive} handleActive={handleActive} handleDelete={handleDelete} selectedPlayer={selectedPlayer}></Selected>
        )}
      </div>
    </div>
  );
};

export default AvailablePlayers;
