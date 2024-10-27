
const Footer = () => {
    return (
        <footer className="bg-black text-white lg:pt-40 md:pt-48 pt-28 relative">
            <section className="max-w-7xl mx-auto mt-8 md:mt-10 py-10">
                <div className="grid justify-center items-end">
                    <div className="flex justify-center items-center mb-6 md:mb-12">
                        <img src="/logo-footer.png" alt="" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 justify-center md:justify-between items-center gap-6 mb-5">
                        <div className="flex flex-col justify-center md:pb-9">
                            <h2 className="font-sora text-lg font-semibold text-center md:text-left mb-3">About Us</h2>
                            <p className="font-sora text-center md:text-left text-gray-400 md:leading-7">We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.</p>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h2 className="font-sora text-lg font-semibold text-center md:text-left mb-3 md:-ml-6">Quick Links</h2>
                            <ul className="list-disc text-gray-400 flex justify-center items-center md:items-start flex-col gap-2">
                                <li><a className="font-sora text-center mb-3" href="#">Home</a></li>
                                <li><a className="font-sora text-center mb-3" href="#">Services</a></li>
                                <li><a className="font-sora text-center mb-3" href="#">About</a></li>
                                <li><a className="font-sora text-center mb-3" href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h2 className="font-sora text-lg font-semibold text-center md:text-left mb-3">Subscribe</h2>
                            <p className="font-sora text-center md:text-left text-gray-400 mb-3">Subscribe to our newsletter for the <br /> latest updates.</p>
                            <div className="flex items-center mb-3">
                                <input
                                    type="text"
                                    placeholder="Enter Your Email"
                                    className="input input-bordered input-warning w-full rounded-l-lg focus:mr-2 rounded-r-none focus:rounded-r-lg" />
                                <button className="hover:btn font-sora font-bold px-5 btn-md rounded-r-lg hover:ml-2 bg-gradient-to-l from-yellow-400 via-yellow-500 to-purple-400 transition-opacity">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="mt-5 flex justify-center items-center">
                        <p className="text-center font-sora text-gray-400"><span>&copy;</span>2024 Your Company All Rights Reserved.</p>
                    </div>
                </div>
            </section>
            <section className=" max-w-7xl mx-auto absolute -top-32 md:-top-1/4 left-3 md:left-6 lg:left-10">
                <div className="flex justify-center items-center border-2 backdrop-blur-3xl p-4 rounded-2xl">
                    <div className="relative bg-white rounded-2xl">
                        <div className="absolute inset-0 bg-no-repeat bg-cover bg-news-letter object-cover rounded-2xl md:py-8"></div>
                        <div className="relative z-10 md:p-4 py-6 md:py-16 mx-14 md:mx-52 lg:mx-80">
                            <h2 className="font-sora font-bold text-xl md:text-3xl text-black lg:text-4xl m-2 md:m-5">Subscribe to our Newsletter</h2>
                            <p className="font-inter font-medium text-gray-800 text-lg md:text-xl m-2 md:m-5">Get the latest updates and news right in your inbox!</p>
                            <div className=" m-2 md:m-5 flex items-center gap-2 md:gap-5 md:pb-8">
                                <input
                                    type="text"
                                    placeholder="Enter Your Email"
                                    className="input input-bordered input-warning w-full" />
                                <button className="hover:btn font-sora font-bold px-5 btn-md rounded-lg bg-gradient-to-l from-yellow-400 via-yellow-500 to-purple-400 transition-opacity text-black">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;