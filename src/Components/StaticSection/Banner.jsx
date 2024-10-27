import PropTypes from "prop-types";

const Banner = ({handleClickToAddAmount}) => {
    return (
        <section className="max-w-7xl mx-auto my-8 md:my-10 ">
            <div className="relative">
                <div className=" absolute inset-0 bg-hero-pattern bg-cover object-cover bg-no-repeat bg-black brightness-75 rounded-2xl"></div>
               
                <div className="relative z-10 flex flex-col justify-center items-center p-6 md:p-16">
                    <img className="mb-10" src="/banner-main.png" alt="Crickcet main logo" />
                    <h1 className="font-bold font-sora text-2xl text-center text-white md:text-[40px] mb-10">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <h4 className="font-inter font-medium text-2xl text-gray-300 text-center">Beyond Boundaries Beyond Limits</h4>
                    <div className="btn bg-violet-500 md:bg-black md:hover:bg-black border-1 border-yellow-btn p-1 rounded-xl mt-10">
                        <button onClick={()=>handleClickToAddAmount()} className="btn btn-sm bg-yellow-btn font-bold font-sora rounded-lg px-2">Claim Free Credits</button>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

Banner.propTypes = {
    handleClickToAddAmount: PropTypes.func.isRequired,
    
}

export default Banner;