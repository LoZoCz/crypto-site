import logo from '../../assets/images/icons/icon.svg'
import NavList from './NavList'

const Header = () => {
    return (
        <header className="main__head">
            <img src={logo} alt="main logo" className="main__head-logo" />
            <nav className="main__head-nav main__nav">
                <NavList />
            </nav>
        </header>
    )
}

export default Header
