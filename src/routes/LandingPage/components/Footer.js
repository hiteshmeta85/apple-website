const FooterItems = [
    {
        id: 1, name: 'Shop and Learn',
        fields: [
            {id: 1, name: 'Store', url: '#'},
            {id: 2, name: 'Mac', url: '#'},
            {id: 3, name: 'iPad', url: '#'},
            {id: 4, name: 'iPhone', url: '#'},
            {id: 5, name: 'Watch', url: '#'},
            {id: 6, name: 'AirPods', url: '#'},
            {id: 7, name: 'TV & Home', url: '#'},
            {id: 8, name: 'iPod touch', url: '#'},
            {id: 9, name: 'AirTag', url: '#'},
            {id: 10, name: 'Accessories', url: '#'},
        ]
    },
    {
        id: 2, name: 'Services',
        fields: [
            {id: 1, name: 'Apple Music', url: '#'},
            {id: 2, name: 'Apple TV+', url: '#'},
            {id: 3, name: 'Apple Arcade', url: '#'},
            {id: 4, name: 'iCloud', url: '#'},
            {id: 5, name: 'Apple One', url: '#'},
            {id: 6, name: 'Apple Books', url: '#'},
            {id: 7, name: 'Apple Podcasts', url: '#'},
            {id: 8, name: 'Apple Store', url: '#'},
        ]
    },
    {
        id: 3, name: 'Account',
        fields: [
            {id: 1, name: 'Manage Apple ID', url: '#'},
            {id: 2, name: 'Apple Store Account', url: '#'},
            {id: 3, name: 'iCloud.com', url: '#'},
        ]
    },
    {
        id: 4, name: 'Apple Store',
        fields: [
            {id: 1, name: 'Ways to Buy', url: '#'},
            {id: 2, name: 'Apple Trade In', url: '#'},
            {id: 3, name: 'Recycling Programme', url: '#'},
            {id: 4, name: 'Order Status', url: '#'},
            {id: 5, name: 'Shopping Help', url: '#'},
        ]
    },
    {
        id: 5, name: 'For Business',
        fields: [
            {id: 1, name: 'Apple and Business', url: '#'},
        ]
    },
    {
        id: 6, name: 'For Education',
        fields: [
            {id: 1, name: 'Apple and Education', url: '#'},
            {id: 2, name: 'Shop for Education', url: '#'},
            {id: 3, name: 'Shop for University', url: '#'},
        ]
    },
    {
        id: 7, name: 'For Healthcare',
        fields: [
            {id: 1, name: 'Apple in Healthcare', url: '#'},
            {id: 2, name: 'Health on Apple Watch', url: '#'},
        ]
    },
    {
        id: 8, name: 'Apple Values',
        fields: [
            {id: 1, name: 'Accessibility', url: '#'},
            {id: 2, name: 'Environment', url: '#'},
            {id: 3, name: 'Privacy', url: '#'},
            {id: 4, name: 'Supplier Responsibility', url: '#'},
        ]
    },
    {
        id: 9, name: 'About Apple',
        fields: [
            {id: 1, name: 'Newsroom', url: '#'},
            {id: 2, name: 'Apple Leadership', url: '#'},
            {id: 3, name: 'Career Opportunities', url: '#'},
            {id: 4, name: 'Investors', url: '#'},
            {id: 5, name: 'Ethics & Compliance', url: '#'},
            {id: 6, name: 'Events', url: '#'},
            {id: 7, name: 'Contact Apple', url: '#'},
        ]
    },
]

const Footer = () => {
    return (
        <div className='bg-[#F5F5F7] text-xs text-gray-500'>
            <div className='max-w-screen-lg mx-auto px-4 md:px-6'>
                <div className='space-y-2 pt-4 pb-6'>
                    <p>
                        ‡No-Cost EMI available for purchases made using qualifying credit cards on 3, 6 or 12 month
                        tenures only. Offer available on qualifying purchases made after 1:30 PM IST on January 20,
                        2022 and before 11:59 PM IST on March 24, 2022. Minimum order spend applies as per your
                        credit card’s issuing bank threshold. Offer cannot be combined with Apple Store for
                        Education or Corporate Employee Purchase Plan pricing. Credit card eligibility is subject to
                        terms and conditions between you and your credit card issuing bank. Offer may be revised or
                        withdrawn at any time without any prior notice. Offer valid for limited period. Terms &
                        conditions apply.
                    </p>
                    <p>
                        Representative example: Based off a 12 month tenure. ₹69900 total cost includes 15% pa and
                        No Cost EMI savings of ₹5363, paid over 12 months as 12 monthly payments of ₹5825.
                    </p>
                    <p>
                        Statements are representative of the individual user experience of iPhone model stated.
                        Animated Memojis require iPhone X or later. Memoji professionally animated.
                    </p>
                    <p>
                        Apple TV+ is ₹99/month after free trial. One subscription per Family Sharing group. Offer is
                        valid for 3 months after eligible device activation. Plan automatically renews until
                        cancelled. Restrictions and other terms apply.
                    </p>
                    <p>
                        More ways to shop: Find a retailer near you. Or call 000800 040 1966.
                    </p>
                    <hr/>
                    {/* for larger screens */}
                    <div className='hidden md:flex flex-col max-h-[25rem] flex-wrap pb-8 mt-2'>
                        {FooterItems.map((item) => {
                            return (
                                <div key={item.id} className='mr-6 mt-4'>
                                    <p className='font-bold text-black'>{item.name}</p>
                                    <ul className='space-y-2 mt-2'>
                                        {item.fields.map((field) => {
                                            return (
                                                <li key={field.key} className='hover:underline hover:underline-offset-1'>
                                                    <a href={field.url}>{field.name}</a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                    {/* for smaller screens */}
                    <p>More ways to shop: <span className='text-blue-500'>Find a retailer near you.</span><br
                        className='md:hidden'/>
                        Or call 000800 040 1966.
                    </p>
                    <hr className='hidden md:block'/>
                    <div className='flex justify-between flex-wrap-reverse'>
                        <div className='flex flex-wrap-reverse'>
                            <p className='mt-2 md:mt-0 md:mr-4'>Copyright © 2022 Apple Inc. All rights reserved.</p>
                            <ul className='flex md:space-x-2 gap-x-2 flex-wrap text-gray-800'>
                                <li className='hover:underline hover:underline-offset-1 inline'>
                                    <a href='/'>Privacy Policy</a>
                                </li>
                                <li className='hover:underline hover:underline-offset-1'>
                                    <a href='/'>Terms of Use</a>
                                </li>
                                <li className='hover:underline hover:underline-offset-1'>
                                    <a href='/'>Sales Policy</a>
                                </li>
                                <li className='hover:underline hover:underline-offset-1'>
                                    <a href='/'>Legal</a>
                                </li>
                                <li className='hover:underline hover:underline-offset-1'>
                                    <a href='/'>Site Map</a>
                                </li>
                            </ul>
                        </div>
                        <p className='mb-4 md:mb-auto text-gray-800'>India</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer