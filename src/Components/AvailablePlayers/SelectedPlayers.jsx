import PropTypes from "prop-types";

const SelectedPlayers = ({ selectedPlayer, totalPlayers, handleRemovePlayer, handleAddMorePlayer }) => {
    const players = selectedPlayer || [];
    console.log(players, "here are selected player");
    const remainingPlayer = parseFloat(totalPlayers - selectedPlayer.length);
    return (
        <div>
            <h2 className="font-sora font-bold text-3xl">Selected Players: ({remainingPlayer}/{selectedPlayer.length})</h2>

            {selectedPlayer.map((p) => (
                <div key={p.id} className="mb-3 rounded-md">
                    <div className="flex justify-between items-center gap-5 p-2 border-2 rounded-lg">
                        <div className="flex items-center gap-2">
                            <div className="w-16 h-16">
                                <img className="w-full h-full rounded-xl" src={p.imageIcon} alt="" />
                            </div>
                            <div>
                                <h3 className="font-sora font-semibold text-2xl">{p.name}</h3>
                                <p className="font-sora">{p.battingHand}-Hand-Bat</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => handleRemovePlayer(p.id)} className="btn btn-md"><i className="fa-solid fa-trash text-xl text-red-200"></i></button>
                        </div>
                    </div>
                </div>
            ))}
            <button onClick={handleAddMorePlayer} className="btn bg-yellow-btn mt-2 md:btn-md btn-sm font-sora font-bold">Add More Player</button>


        </div>
    );
};
SelectedPlayers.propTypes={
    selectedPlayer:PropTypes.array,
    totalPlayers:PropTypes.number,
    handleAddMorePlayer: PropTypes.func,
    handleRemovePlayer: PropTypes.func
}

export default SelectedPlayers;
