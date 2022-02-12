const Body = () => {
    return (
        <div className='max-w-[160rem] mx-auto'>
            <div className='bg-[#F5F5F7] text-center'>
                <p className='inline-block text-sm leading-5 tracking-low mx-8 md:mx-0 py-3'>
                    Get No Cost EMI for 12 months with qualifying Credit Cards from most leading banks.
                    <a href='#' className='text-[#0065CC] ml-1 hover:underline'>
                        Learn more
                    </a>
                </p>
            </div>

            {/* iphone 13 pro featured */}

            <div
                className="bg-iphone-13-pro-small-screen md:bg-iphone-13-pro-medium-screen lg:bg-iphone-13-pro
                           bg-cover bg-center w-full text-center h-[500px] md:h-[680px] flex flex-col"
            >
                <h1 className='text-3xl md:text-6xl font-semibold mt-8 md:mt-12'>iPhone 13 Pro</h1>
                <p className='text-lg md:text-3xl mt-1'>Oh. So. Pro.</p>
                <p className='text-md md:text-xl text-blue-500 space-x-5 mt-2 md:mt-4'>
                    <a href='#' className='hover:underline'>Learn More</a>
                    <a href='#' className='hover:underline'>Buy</a>
                </p>
            </div>

            {/* iphone 13 featured */}

            <div
                className="bg-iphone-13-small-screen md:bg-iphone-13-medium-screen lg:bg-iphone-13 bg-cover
                           bg-center w-full text-center h-[500px] md:h-[680px] flex flex-col mt-3 justify-center md:justify-start"
            >
                <h1 className='text-3xl md:text-6xl font-semibold mt-12 text-white'>iPhone 13</h1>
                <p className='text-lg md:text-3xl mt-1 text-white'>Your new superpower.</p>
                <p className='text-md md:text-xl text-blue-500 space-x-5 mt-2 md:mt-4'>
                    <a href='#' className='hover:underline'>Learn More</a>
                    <a href='#' className='hover:underline'>Buy</a>
                </p>
            </div>

            {/* macbook pro 14 and 16 */}

            <div
                className="bg-macbook-pro-14-and-16-small-screen md:bg-macbook-pro-14-and-16-medium-screen lg:bg-macbook-pro-14-and-16
                           bg-cover bg-center w-full text-center h-[500px] md:h-[680px] flex flex-col mt-3"
            >
                <h1 className='text-3xl md:text-6xl font-semibold mt-12'>Macbook Pro</h1>
                <p className='text-lg md:text-3xl mt-1 '>Supercharged for pros.</p>
                <p className='text-md md:text-xl text-blue-500 space-x-5 mt-2 md:mt-4'>
                    <a href='#' className='hover:underline'>Learn More</a>
                    <a href='#' className='hover:underline'>Buy</a>
                </p>
            </div>


            {/* grid */}

            <div className='grid grid-cols-1 md:grid-cols-2 py-1.5 md:px-3 tracking-wide'>

                {/* Apple Watch */}

                <div
                    className="bg-apple-watch-series-7-small-screen md:bg-apple-watch-series-7-medium-screen lg:bg-apple-watch-series-7
                    bg-cover bg-center text-center h-[500px] md:h-[580px] my-1.5 md:mx-1.5"
                >
                    <a href='#' className='w-full h-full inline-block'>
                        <p className='text-xs text-red-700 mt-8'>New</p>
                        <img className='mx-auto max-h-12 md:max-h-16 mt-2'
                             src='https://www.apple.com/v/home/aj/images/logos/watch-series-7/tile_watch_logo_lte__h7snssb7mqq2_large_2x.png'
                             alt='apple-watch'/>
                        <p className='text-xl mx-auto mt-2'>Introducing our largest display yet.</p>
                        <p className='text-lg text-blue-500 space-x-5 mt-2'>
                            <a href='#' className='hover:underline'>Learn More</a>
                            <a href='#' className='hover:underline'>Buy</a>
                        </p>
                    </a>
                </div>

                {/* Ipad mini */}

                <div
                    className="bg-ipad-mini bg-cover bg-center text-center h-[500px] md:h-[580px] my-1.5 md:mx-1.5"
                >
                    <a href='#' className='w-full h-full inline-block'>
                        <img className='mx-auto max-h-6 mt-12 md:mt-16'
                             src='https://www.apple.com/v/home/aj/images/logos/ipad-mini/promo_logo_ipad_mini__n5nqff6gq8yu_large_2x.png'
                             alt='ipad mini'/>
                        <p className='text-xl mx-auto mt-2'>Mega power. Mini sized.</p>
                        <p className='text-lg text-blue-500 space-x-5 mt-2'>
                            <a href='#' className='hover:underline'>Learn More</a>
                            <a href='#' className='hover:underline'>Buy</a>
                        </p>
                    </a>
                </div>

                {/* Valentines Day */}

                <div
                    className="bg-valentines-day bg-cover bg-center text-center
                        h-[500px] md:h-[580px] my-1.5 md:mx-1.5"
                >
                    <a href='#' className='w-full h-full inline-block'>
                        <p className='font-semibold text-xl mx-auto mt-8 md:mt-12 text-[#5F2D61]'>
                            Valentine's Day
                        </p>
                        <h1 className='text-3xl md:text-4xl font-semibold text-[#5F2D61] max-w-[14rem] md:max-w-[16rem] mx-auto mt-2'>
                            Say it with a gift from Apple.
                        </h1>
                        <p className='text-lg text-blue-500 mt-2'>
                            <a href='#' className='hover:underline'>Shop</a>
                        </p>
                    </a>
                </div>

                {/* airpods */}

                <div
                    className="bg-airpods-3rd-generation bg-cover bg-center text-center
                        h-[500px] md:h-[580px] my-1.5 md:mx-1.5"
                >
                    <a href='#' className='w-full h-full flex flex-col justify-end pb-6 md:pb-10'>
                        <h1 className='text-4xl font-semibold'>AirPods</h1>
                        <p className='text-xl mt-2'>
                            All-new with Spatial Audio.
                        </p>
                        <p className='mt-2 text-lg text-blue-500 space-x-5'>
                            <a href='#' className='hover:underline'>Learn More</a>
                            <a href='#' className='hover:underline'>Buy</a>
                        </p>
                    </a>
                </div>

                {/* switch to iphone */}

                <div className="text-center h-[500px] md:h-[580px] my-1.5 md:mx-1.5 bg-[#F7D4DD]">
                    <a href='#' className='w-full h-full inline-block flex flex-col justify-between'>
                        <div>
                            <h1 className='text-3xl md:text-4xl font-semibold max-w-lg md:mx-auto mx-6 mt-12'>
                                There are so many reasons to switch to iPhone.
                            </h1>
                            <p className='text-lg md:text-xl max-w-lg md:mx-auto mx-6 mt-2'>
                                Anukriti S. switched because it takes selfies that truly pop. Hear her story and
                                that of others.
                            </p>
                            <p className='text-lg text-blue-500 space-x-5 mt-2'>
                                <a href='#' className='hover:underline'>Watch her film</a>
                                <a href='#' className='hover:underline'>Learn More</a>
                            </p>
                        </div>
                        <img className='mx-auto mb-4'
                             src='https://www.apple.com/in/home/images/promos/why-switch/arshiya/promo_switch_to_iphone__dcdfmymgd5ci_large.jpg'
                             alt='after party promo'/>
                    </a>
                </div>

                {/* Apple TV */}

                <div className="bg-apple-tv bg-cover bg-center text-center h-[500px] md:h-[580px] my-1.5 md:mx-1.5">
                    <a href='#' className='w-full h-full inline-block flex flex-col justify-between'>
                        <img className='mx-auto mt-8 md:mt-12 max-h-8'
                             src='https://www.apple.com/v/home/aj/images/logos/tv-plus/logo__dcojfwkzna2q_large_2x.png'
                             alt='apple logo'/>
                        <div className='mb-8'>
                            <img className='mx-auto max-h-12'
                                 src='https://www.apple.com/v/home/aj/images/logos/tv-plus-afterparty/logo_afterparty__d8j5rt3g7j2a_large_2x.png'
                                 alt='after party promo'/>
                            <p className='text-xl'>
                                Stream Now
                            </p>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Body