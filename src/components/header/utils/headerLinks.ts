import homeIcon from '../../../assets/images/icons/home.svg'
import aboutIcon from '../../../assets/images/icons/book-open.svg'
import cryptoIcon from '../../../assets/images/icons/activity.svg'
import exchangeIcon from '../../../assets/images/icons/briefcase.svg'

const headerLinks = [
    {
        title: 'Strona główna',
        path: '/',
        iconSrc: homeIcon,
    },
    {
        title: 'O nas',
        path: '/about',
        iconSrc: aboutIcon,
    },
    {
        title: 'Kryptowaluty',
        path: '/cryptoList',
        iconSrc: cryptoIcon,
    },
    {
        title: 'Giełdy',
        path: '/exchangeList',
        iconSrc: exchangeIcon,
    },
]

export default headerLinks
