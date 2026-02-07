import { menuRoutes } from '../../constants/menuRoute'
import handleScrollToTopAndCleanUrl from '../../utils/handleToTopUtil'

const Navbar = ({ theme, toggleTheme }) => {

    return (
        <header className="default-navbar u-transition py-4 px-5 w-100 u-bg-primary">
            <div className="d-flex justify-content-between align-items-center">
                <a className="common-home u-text-primary" href
                    onClick={handleScrollToTopAndCleanUrl}
                >
                    <img src='/b63473da-4806-4458-a3dd-d03009605211.png' alt="Logo" />
                    Le Lenh Nguyen
                </a>
                <ul className="common-menu ">
                    {menuRoutes.map((menuItem, index) => (
                        <li key={index}>
                            <a className="u-text-primary" href={`#${menuItem.id}`}>
                                {menuItem.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="d-flex gap-3 align-items-center">
                    <span className="theme-toggle"
                        onClick={toggleTheme}
                    >
                        {theme === 'light'
                            ? <ion-icon className="theme-icon" name="moon-outline"></ion-icon>
                            : <ion-icon className="theme-icon" name="sunny-outline"
                                style={{ color: 'var(--text-primary)' }}></ion-icon>
                        }
                    </span>
                    <div className="flag-section">
                        <span className="fi fi-vn"></span>
                        <div className="flag-section__dropdown"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
