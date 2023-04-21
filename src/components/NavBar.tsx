import { Link } from "react-router-dom";
import homeLogo from '../logo.svg';
import { useState } from "react";

interface MenuItem {
    destination: string;
    label: string;
}

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const menuItems: MenuItem[] = [
        {
            destination: "/about",
            label: "About"
        },
        {
            destination: "/careers",
            label: "Careers"
        },
    ];

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="flex items-center justify-between bg-develgo-blue">
            <Link className="cursor-pointer" to="/">
                <img src={homeLogo} alt="Develgo Logo" className="nav-logo bg-develgo-light-blue" />
            </Link>
            <div className="flex mx-4 space-x-4 text-lg text-white font-bold items-center">
                {
                    menuItems.map((menuItem, index) => {
                        return (
                            <Link key={index} className="invisible md:visible cursor-pointer hover:underline" to={menuItem.destination}>{menuItem.label}</Link>
                        );
                    })
                }
                <button className="md:hidden" type="button" onClick={toggleMenu}>
                    <div className="grid grid-rows-3 bg-develgo-light-blue w-8 h-8 items-center justify-center p-1 rounded">
                        <div className="bg-develgo-blue w-6 h-1 rounded"></div>
                        <div className="bg-develgo-blue w-6 h-1 rounded"></div>
                        <div className="bg-develgo-blue w-6 h-1 rounded"></div>
                    </div>
                </button>
                <div id="dropdown" hidden={!showMenu} className="absolute right-4 top-14 z-10 bg-develgo-blue rounded p-2 border-white border-2">
                    <ul>
                        {
                            menuItems.map((menuItem, index) => {
                                return (
                                    <li key={index}><Link className="cursor-pointer hover:underline" to={menuItem.destination} onClick={toggleMenu}>{menuItem.label}</Link></li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;