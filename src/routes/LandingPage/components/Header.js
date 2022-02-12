const NavItems = [
    {id: 1, name: 'Store', url: '#'},
    {id: 2, name: 'Mac', url: '#'},
    {id: 3, name: 'iPad', url: '#'},
    {id: 4, name: 'iPhone', url: '#'},
    {id: 5, name: 'Watch', url: '#'},
    {id: 6, name: 'AirPods', url: '#'},
    {id: 7, name: 'TV & Home', url: '#'},
    {id: 8, name: 'Only on Apple', url: '#'},
    {id: 9, name: 'Accessories', url: '#'},
    {id: 10, name: 'Support', url: '#'},
]


const Header = () => {
    return (
        <div className='sticky top-0 tracking-low'>
            <div className='bg-[#424245] text-white text-xs'>
                <ul className='max-w-screen-lg flex mx-auto'>
                    <li className='ml-2'>
                        <a href='#' className='inline-block py-3 px-2 hover:underline hover:decoration-solid'>
                            <span>Education Store Home</span>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='inline-block py-3 px-2 hover:underline hover:decoration-solid'>
                            <span>Exit</span>
                        </a>
                    </li>
                </ul>
            </div>
            {/* for larger screens */}
            <div className='bg-[#333333] hidden md:block'>
                <ul className='max-w-screen-lg flex justify-between items-center mx-auto text-xs text-white px-2 text-gray-300'>
                    <li className='px-2'>
                        <a href='#'>
                            <img
                                src='https://www.apple.com/ac/globalnav/7/en_IN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg'
                                alt='logo'
                            />
                        </a>
                    </li>
                    {NavItems.map((item) => {
                        return (
                            <li key={item.id} className='hover:text-gray-100'>
                                <a href={item.url} className='inline-block py-3 px-2'>
                                    <span className='py-1.5'>{item.name}</span>
                                </a>
                            </li>
                        )
                    })}
                    <li className='px-2'>
                        <a href='#'>
                            <img
                                src='https://www.apple.com/ac/globalnav/7/en_IN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_large.svg'
                                alt='cart'
                            />
                        </a>
                    </li>
                </ul>
            </div>
            {/* for smaller screens */}
            <div className='bg-[#333333] md:hidden'>
                <ul className='flex justify-between items-center text-xs text-white px-2 text-gray-300'>
                    <li className='px-2'>
                        <a href='#'>
                            {/* not a href , will be a toggle button */}
                            X
                        </a>
                    </li>
                    <li className='px-2'>
                        <a href='#'>
                            <img
                                src='https://www.apple.com/ac/globalnav/7/en_IN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg'
                                alt='logo'
                            />
                        </a>
                    </li>
                    <li className='px-2'>
                        <a href='#'>
                            <img
                                src='https://www.apple.com/ac/globalnav/7/en_IN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_large.svg'
                                alt='cart'
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header