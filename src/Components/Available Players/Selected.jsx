import { FaTrash } from "react-icons/fa";
import { BsCoin } from "react-icons/bs";
import Player from "./Player/Player";
const Selected = ({ selectedPlayer, handleDelete,handleActive,isActive }) => {
  return (
    <div className="md:mb-48">
      <div>
        <h2 className="text-xl font-bold mb-10">Selected Player({selectedPlayer.length})/06</h2>
      </div>
      {selectedPlayer.map((player) => (
        <div className="flex justify-between items-center mb-6 p-3 border-2 rounded-xl">
          <div className="flex gap-4 items-center">
            <div>
              <img
                className="w-16 h-16 rounded-full"
                src={player.image}
                alt=""
              />
            </div>
            <div>
              <div className="text-xl font-bold">{player.name}</div>
              <div>{player.role}</div>
              <div className="inline-flex items-center gap-1 text-xl"><span><BsCoin /></span>{player.biddingPrice}</div>
            </div>
          </div>
          <div
            onClick={() => handleDelete(player.playerId)}
            className="btn text-lg mr-6"
          >
            <FaTrash />
          </div>
        </div>
      ))}
      <button onClick={()=>handleActive('cart')} className="btn bg-blue-500">Add More Players</button>
      {isActive.cart? <Player></Player>: ''}
    </div>
  );
};

export default Selected;
