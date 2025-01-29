'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


const links = ["about", "projects", "contact"]

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
    const pathname = usePathname();
    console.log(pathname)
    return (
        <ul className="flex">
            {links.map((link, index) => {
                return (
                    <li key={index}><NavBarLink link={link} pathname={pathname}  /></li>
                );
            })}
        </ul>
    );      
}

const NavBarLink = ({ link, pathname }) => (
    <Link 
        className={clsx("navbar-link", {'text-tiel':'/'+link === pathname})}
        href={`/${link}`}
    >
        {link}
    </Link>
);