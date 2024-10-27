// import AllPlayers from "./AllPlayers";
import CardsPlayer from "./CardsPlayer";
import SelectedPlayers from "./SelectedPlayers";
import PropTypes from "prop-types";

const AvailablePlayers = ({ handleIsAvailableOrSelected, isAvailable, selectedPlayer=[], totalPlayers, handleRemovePlayer, handleAddMorePlayer, }) => {
    const selectedCount= selectedPlayer.length;
    console.log('here pass the selected player', selectedCount)
    // console.log(isAvailable)
    return (
        <section className="max-w-7xl mx-auto my-8 md:my-10">
            <div className="flex md:justify-between justify-center items-center gap-2">
                <div><h2 className="font-sora font-bold text-xl md:text-3xl">Total Players:({totalPlayers})</h2></div>
                <div className=" md:border border-gray-300 flex items-center rounded-l-xl rounded-r-xl m-2">
                    <button onClick={() => handleIsAvailableOrSelected('available')} className={`hover:btn font-sora font-bold md:px-7 md:hover:px-7 rounded-l-xl btn-sm md:btn-md ${isAvailable.available ? 'bg-yellow-btn btn-sm ' : ''}`}>Available</button>
                    <button onClick={() => handleIsAvailableOrSelected('selected')} className={`hover:btn font-sora font-bold md:px-5 md:hover:px-2 rounded-r-xl btn-sm md:btn-md ${!isAvailable.available ? 'bg-yellow-btn btn-sm' : ''}`}>Selected (<span>{totalPlayers - selectedCount}/{selectedCount}</span>)</button>
                </div>
            </div>

            <div>
                {
                    isAvailable.available ? <CardsPlayer ></CardsPlayer> : <SelectedPlayers 
                        handleAddMorePlayer={handleAddMorePlayer}
                        handleRemovePlayer={handleRemovePlayer} 
                        totalPlayers={totalPlayers} 
                        selectedPlayer={selectedPlayer}></SelectedPlayers>
                }
                {/* <AllPlayers selectedPlayer={selectedPlayer}></AllPlayers> */}
            </div>
        </section>
    );
};

AvailablePlayers.propTypes = {
    handleIsAvailableOrSelected: PropTypes.func.isRequired,
    isAvailable: PropTypes.object.isRequired,
    selectedPlayer: PropTypes.array.isRequired,
    totalPlayers: PropTypes.number.isRequired,
    handleRemovePlayer: PropTypes.func.isRequired,
    handleAddMorePlayer: PropTypes.func.isRequired,
    // handleSelectedPlayer: PropTypes.func.isRequired,
    // players: PropTypes.array.isRequired
}

export default AvailablePlayers;