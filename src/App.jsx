import { useState, useEffect } from "react";
import AvailablePlayers from "./Components/Available Players/AvailablePlayers";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Selected from "./Components/Available Players/Selected";
function App() {
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  const handleDelete = (id) => {
    const remaining = selectedPlayer.filter((f) => f.playerId !== id);
    setSelectedPlayer(remaining);
    toast.success("successfully Deleted");
  };

  const handleSelected = (player) => {
    const isExist = selectedPlayer.find((p) => p.playerId == player.playerId);
    if (isExist) {
      toast.error("Already Selected");
    } else {
      if (coin > player.biddingPrice) {
        if (selectedPlayer.length < 6) {
          handleDecrees(player.biddingPrice);
          const newSelectedPlayer = [...selectedPlayer, player];
          setSelectedPlayer(newSelectedPlayer);
          toast.success("successfully selected");
        } else {
          toast.warn("Already Maximum Selected");
        }
      } else {
        toast.warn("Inefficient Coin");
      }
    }
  };

  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("/players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data.players));
  }, []);
  const [isActive, setActive] = useState({
    cart: true,
    status: "available",
  });

  const handleActive = (status) => {
    if (status == "cart") {
      setActive({
        cart: true,
        status: "available",
      });
    } else {
      setActive({
        cart: false,
        status: "selected",
      });
    }
  };

  const [coin, setCoin] = useState(0);
  const claimCredit = () => {
    const addCredit = coin + 5000000;
    setCoin(addCredit);
    toast.success("successfully Claimed");
  };
  const handleDecrees = (price) => {
    if (coin >= price) {
      setCoin(coin - price);
    }
  };
  return (
    <>
      <div className="container mx-auto">
        <Navbar coin={coin}></Navbar>
        <Banner claimCredit={claimCredit}></Banner>
        <AvailablePlayers
          handleDelete={handleDelete}
          selectedPlayer={selectedPlayer}
          handleSelected={handleSelected}
          players={players}
          isActive={isActive}
          handleActive={handleActive}
        ></AvailablePlayers>
        <Footer></Footer>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition:Bounce
        />
      </div>
    </>
  );
}
export default App;
