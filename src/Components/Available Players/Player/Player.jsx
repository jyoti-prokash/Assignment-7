import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { BsCoin } from "react-icons/bs";

const Player = ({ players,handleSelected }) => {
  return (
    <div className="flex flex-wrap gap-5 justify-between pb-36">
      {
        players.map(player=>
          <div key={player.playerId}>
                <div className="card bg-base-100 w-96 border-2">
          <figure className="px-5 pt-5">
            <img
              src={player.image}
              alt="available players"
              className="rounded-xl max-h-[250px]"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title gap-3 text-lg">
              <FaUser /> {player.name}
            </h2>
            <div className="flex items-center border-b-2">
              <p className="font-bold flex items-center gap-3 py-2">
                <FaFlag />
                {player.country}
              </p>
              <p className="text-gray-500">{player.role}</p>
            </div>
            <p className="text-lg font-bold">Rating</p>
            <div className="flex justify-between text-sm">
              <div>{player.battingType}</div>
              <div className="text-gray-500">{player.bowlingType}</div>
            </div>
            <div className="flex items-center">
              <p className="flex gap-3 items-center font-bold text-lg">
                <BsCoin />
                {player.biddingPrice}
              </p>
              <button onClick={()=>handleSelected(player)} className="btn hover:bg-[#E7FE29]">Choose Player</button>
            </div>
          </div>
        </div>
          </div>
        )
      }
    </div>
  );
};

export default Player;
