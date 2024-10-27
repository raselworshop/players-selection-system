import PropTypes from "prop-types";

const Header = ({ amount }) => {
    return (
        <section className="max-w-7xl mx-auto my-4 md:mb-10 sticky  top-0 z-50">
            <nav className="bg-white bg-opacity-60 backdrop-blur-lg  py-4">
                <div className="flex justify-between items-center mx-2 ">
                    {/* navbar logo */}
                    <div>
                        <img src="/logo.png" alt="Site logo" />
                    </div>
                    {/* navbar menu */}
                    <div>
                        <ul className="hidden md:flex justify-between items-center gap-12 font-sora">
                            <li><a className="text-gray-700 font-medium hover:btn hover:btn-sm text-base" href="#">Home</a></li>
                            <li><a className="text-gray-700 font-medium hover:btn hover:btn-sm text-base" href="#">Fixture</a></li>
                            <li><a className="text-gray-700 font-medium hover:btn hover:btn-sm text-base" href="#">Teams</a></li>
                            <li><a className="text-gray-700 font-medium hover:btn hover:btn-sm text-base" href="#">Schedules</a></li>
                            <div className="border rounded-xl py-1 px-2 hover:border-none hover:btn hover:btn-sm text-base flex justify-between gap-2">
                                <span >{amount}</span><p>Balance</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-yellow-100 bg-yellow-400 rounded-full">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                        </ul>
                        {/* mobile view */}
                        <div className="md:hidden flex justify-center items-center gap-2">
                            <div className="dropdown dropdown-bottom">
                                <div tabIndex={0} role="button" className="hover:btn border rounded-xl py-3 px-5  hover:border-none m-1"><i className="fa-solid fa-bars"></i></div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-200 rounded-box z-[1] p-2 shadow">
                                    <li><a className="text-gray-700 font-medium hover:btn hover:btn-sm text-base hover:bg-slate-500 hover:text-yellow-50" href="#">Home</a></li>
                                    <li><a className="text-gray-700 font-medium hover:btn hover:btn-sm text-base hover:bg-slate-500 hover:text-yellow-50" href="#">Fixture</a></li>
                                    <li><a className="text-gray-700 font-medium hover:btn hover:btn-sm text-base hover:bg-slate-500 hover:text-yellow-50" href="#">Teams</a></li>
                                    <li><a className="text-gray-700 font-medium hover:btn hover:btn-sm text-base hover:bg-slate-500 hover:text-yellow-50" href="#">Schedules</a></li>
                                </ul>
                            </div>

                            <div className="md:hidden border rounded-xl py-1 px-2 hover:border-none hover:btn btn-md text-base flex justify-between items-center gap-2">
                                <span >0</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-yellow-100 bg-yellow-400 rounded-full">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
};

Header.propTypes = {
    amount: PropTypes.number.isRequired
}
export default Header;