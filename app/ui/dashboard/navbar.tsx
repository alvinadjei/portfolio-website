'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from "next/image";

const links = ["about", "projects", "blog", "contact"]

export default function NavBar() {
    return (
        <header className="navbar">
            <Link 
                className="navbar-logo"
                href="/"
            >
                <Image 
                    src="/favicon.png"
                    alt="Logo"
                    width="75"
                    height="75"
                />
            </Link>
            <nav className="pr-10">
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

const NavBarLink = ({ link, pathname }: {link: string, pathname: string}) => (
    <Link 
        className={clsx("navbar-link", {'text-tiel':'/'+link === pathname})}
        href={`/${link}`}
    >
        {link}
    </Link>
);