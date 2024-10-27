import { useEffect, useState } from "react"
import AvailablePlayers from "./Components/AvailablePlayers/availablePlayers"
import Banner from "./Components/StaticSection/Banner"
import Footer from "./Components/StaticSection/Footer"
import Header from "./Components/StaticSection/Header"
import AllPlayers from "./Components/AvailablePlayers/AllPlayers"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
// import SelectedPlayers from "./Components/AvailablePlayers/SelectedPlayers"


// import SubscribeToNewsLetter from "./Components/StaticSection/SubscribeToNewsLetter"

function App() {

  const [players, setPlayers] = useState([])
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const [totalPlayers, setTotalPlayers] = useState(0);
  const updatedTotalplayer = (count) => {
    console.log(count, 'counted value')
    setTotalPlayers(count)
  }
  console.log(players)

  useEffect(() => {
    fetch('./players.json')
      .then(res => res.json())
      .then(data => {
        setPlayers(data); // Set initial players
        updatedTotalplayer(data.length); // Set total players
      });
  }, []);

  const handleRemovePlayer = (plrId) => {
    // console.log('remove', plrId)

    const removedPlayer = selectedPlayer.find((player) => player.id === plrId);
    setSelectedPlayer((prevSelected) => {
      const updatedPlayer = prevSelected.filter((p) => p.id !== plrId);
      return updatedPlayer;
    })
    if (removedPlayer) {
      setAmount((prevAmount) => prevAmount + removedPlayer.playerPrice)
    }
  }

  const handleAddMorePlayer = () => {
    handleIsAvailableOrSelected('available')
  }

  const handleClickforAlert = (isSuccees, player) => {
    // console.log('click for success toast',isSuccees)
    console.log('click for player success toast',player)
    if (isSuccees) {

      toast.success(`Successfully Added the player:${player.name}!`, {
        position: 'top-right',
        autoClose: 3000,
        className: `bg-green-500 text-white font-semibold rounded-md`,
        bodyClassName: 'text-sm'
      })

    } else {

      toast.error('player already exist!', {
        position: 'top-right',
        autoClose: 3000,
        className: `bg-red-500 text-white font-semibold rounded-md`,
        bodyClassName: 'text-sm'
      })
    }

  };
  const forValidationPice = () => {
    toast.error("You don't have enough money!!, Please claim free credits", {
      position: 'top-right',
      autoClose: 3000,
      className: `bg-red-500 text-white font-semibold rounded-md`,
      bodyClassName: 'text-sm'
    })
  }
  const forValidationPlayer = () => {
    toast.error("You can't add more than 6!!", {
      position: 'top-right',
      autoClose: 3000,
      className: `bg-red-500 text-white font-semibold rounded-md`,
      bodyClassName: 'text-sm'
    })
  }
  const forValidationMoney = () => {
    toast.error("You don't have money, please collect first!!", {
      position: 'top-right',
      autoClose: 3000,
      className: `bg-red-500 text-white font-semibold rounded-md`,
      bodyClassName: 'text-sm'
    })
  }

  const handleSelectedPlayer = (player) => {
    const isExist = selectedPlayer.find((p) => p.id === player.id);
    if (isExist) {
      handleClickforAlert(false, player);
      return;
    }
    if (selectedPlayer.length >= 6) {
      forValidationPlayer()
      return;
    }
    if (player.playerPrice > amount) {
      forValidationPice();
      return;
    }
    if (amount <= 0) {
      forValidationMoney();
      return;
    }

    const addedPlayer = [...selectedPlayer, player]
    setSelectedPlayer(addedPlayer);
    // setPlayerss((prevPlayers) => prevPlayers.filter((p) => p.id !== player.id)); // Remove player from the list
    // setTotalPlayers((prevTotal) => prevTotal - 1);
    setAmount((prevAmount) => prevAmount - player.playerPrice);
    handleClickforAlert(true, player)

  }

  console.log(selectedPlayer, 'before access lengt')

  const [isAvailable, setIsAvailable] = useState({
    available: true,
    status: "available"
  })

  const [amount, setAmount] = useState(0);

  const handleClickToAddAmount = () => {
    const fixedAmoount = 5500000;
    setAmount(prevAmount => fixedAmoount + prevAmount)
  }
  // console.log(amount, 'amount is here')

  const handleIsAvailableOrSelected = (status) => {
    if (status == 'available') {
      setIsAvailable({
        available: true,
        status: 'available'
      })
    } else {
      setIsAvailable({
        available: false,
        status: 'selected'
      })
    }
  }
  // console.log(isAvailable)

  return (
    <>
      {/* header for menu/navbar */}
      <Header
        amount={amount}
      ></Header>
      {/* Banner section */}
      <Banner
        handleClickToAddAmount={handleClickToAddAmount}
      ></Banner>
      {/* Available players section */}
      <AvailablePlayers
        handleAddMorePlayer={handleAddMorePlayer}
        handleRemovePlayer={handleRemovePlayer}
        totalPlayers={totalPlayers}
        selectedPlayer={selectedPlayer}
        isAvailable={isAvailable}
        // handleSelectedPlayer={handleSelectedPlayer}
        // players={players}
        handleIsAvailableOrSelected={handleIsAvailableOrSelected}
      ></AvailablePlayers>
      <AllPlayers
        updatedTotalplayer={updatedTotalplayer}
        // selectedPlayer={selectedPlayer}
        handleSelectedPlayer={handleSelectedPlayer}
        players={players} 
        setPlayers={setPlayers} 
      ></AllPlayers>

     
      {/* footer section */}
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
};

export default App
