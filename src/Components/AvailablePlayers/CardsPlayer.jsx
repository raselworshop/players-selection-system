
import PropTypes from "prop-types";
const CardsPlayer = ({ player,handleSelectedPlayer }) => {
    // console.log(handleSelectedPlayer)
    if (!player) return null;

    const { imageIcon, name, countryName, role, rating, ballerHand, playerPrice, battingHand } = player;
    // console.log(player)
    // console.log(battingHand)
    return (

        <div className="border p-4 rounded-2xl">
            <div className="rounded-2xl w-96 h-56 mb-5">
                <img className="w-full h-full bg-gray-500 rounded-2xl" src={imageIcon} alt="" />
            </div>
            <div className="">
                <div className="border-b-2 pb-5 mb-5">
                    <div className="flex items-center gap-2">
                        <div className="w-8 rounded-full">
                            <img className="w-8 h-8 rounded-full bg-gray-500" src={imageIcon} alt="" />
                        </div>
                        <h3 className="font-sora font-bold text-xl text-gray-900">{name}</h3>
                    </div>
                    <div className="flex justify-between mt-5">
                        <div className="flex items-center gap-2">
                            <small className="w-6 h-6 rounded-full bg-base-200 text-center text-xl ">🏴󠁧󠁢󠁥󠁮󠁧󠁿</small>
                            <h4 className="font-sora text-gray-600">{countryName}</h4>
                        </div>
                        <div>
                            <button className="rounded-lg bg-base-200 btn-sm text-gray-600 font-sora">{role}</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mb-5">
                    <h3 className="font-sora font-bold">Rating:</h3>
                    <h3 className="font-sora font-bold">{rating}</h3>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="mb-5 font-sora font-bold">{battingHand}-Hand-Bat</h3>
                        <p className="font-sora font-bold">Price:{playerPrice}</p>
                    </div>
                    <div>
                        <h3 className="mb-5 font-sora font-bold">{ballerHand}-Hand-Ball</h3>
                        <button className="font-sora font-bold border rounded-lg hover:btn btn-md" onClick={()=>handleSelectedPlayer(player)}>Choose Player</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

CardsPlayer.propTypes = {
    player: PropTypes.object,
    handleSelectedPlayer:PropTypes.func,
}

export default CardsPlayer;