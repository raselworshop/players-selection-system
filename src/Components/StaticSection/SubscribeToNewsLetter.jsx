
const SubscribeToNewsLetter = () => {
    return (
        <section className="max-w-7xl mx-auto">
            <div className="flex justify-center items-center border-2 p-4 rounded-2xl">
                <div className="relative">
                    <div className="absolute inset-0 bg-no-repeat bg-cover bg-news-letter object-cover rounded-2xl"></div>
                    <div className="relative z-10 md:p-4 py-6 md:py-16 mx-14 md:mx-52 lg:mx-80">
                        <h2 className="font-sora font-bold text-xl md:text-3xl lg:text-4xl m-2 md:m-5">Subscribe to our Newsletter</h2>
                        <p className="font-inter font-medium text-gray-600 text-lg md:text-xl m-2 md:m-5">Get the latest updates and news right in your inbox!</p>
                        <div className=" m-2 md:m-5 flex items-center gap-2 md:gap-5">
                            <input
                                type="text"
                                placeholder="Enter Your Email"
                                className="input input-bordered input-warning w-full" />
                            <button className="hover:btn font-sora font-bold px-5 btn-md rounded-lg bg-gradient-to-l from-yellow-400 via-yellow-500 to-purple-400 transition-opacity">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SubscribeToNewsLetter;