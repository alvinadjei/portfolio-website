import Link from "next/link";

const links = ["home", "about", "projects", "contact"]

// TODO: Implement for loops w/ items

export default function NavBar() {
    return (
        <header className="navbar">
            <Link 
                className="navbar-logo"
                href="/"
            >
                Logo
            </Link>
            <nav className="">
                <NavBarLinks />
            </nav>
        </header>
    );
}

function NavBarLinks() {
    return (
        <ul className="flex">
            <li><NavBarLink link='about' /></li>
            <li><NavBarLink link='projects' /></li>
            <li><NavBarLink link='contact' /></li>
        </ul>
    );      
}

const NavBarLink = ({ link }) => (
    <Link 
        className="navbar-link"
        href={`/${link}`}
    >
        {link}
    </Link>
);