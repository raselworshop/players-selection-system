// import { data } from "autoprefixer";
import { useEffect, } from "react";
import CardsPlayer from "./CardsPlayer";
import PropTypes from "prop-types";

const AllPlayers = ({ handleSelectedPlayer,  updatedTotalplayer, players}) => {

    // const [players, setPlayers] = useState([]);
    useEffect(() => {
        updatedTotalplayer(players.length); 
    }, [players.length]); 

    return (
        <section className="max-w-7xl mx-auto my-8 md:my-10 mb-52 md:mb-60 lg:mb-72">
            {/* <div><h2 className="font-sora font-bold text-xl md:text-3xl">Available Players:{players.length}</h2></div> */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    players.map((plyr) => <CardsPlayer
                         key={plyr.id} player={plyr}
                         handleSelectedPlayer={handleSelectedPlayer}
                        ></CardsPlayer>)
                }
            </div>

        </section>
        
    );
};
AllPlayers.propTypes = {
    handleSelectedPlayer: PropTypes.func.isRequired,
    updatedTotalplayer: PropTypes.func.isRequired,
    players: PropTypes.array.isRequired,
}

export default AllPlayers;