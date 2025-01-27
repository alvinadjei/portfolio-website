import Link from "next/link";

const items = ["home", "about", "projects", "contact"]

// TODO: Implement for loops w/ items

export default function NavBar() {
    return (
        <div className="navbar">
            <TopNavItem item='home' />
            <TopNavItem item='about' />
            <TopNavItem item='projects' />
            <TopNavItem item='contact' />
        </div>
    );
}

const TopNavItem = ({ item }) => (
    <Link 
        className="topnav-item"
        href="/"
    >
        {item}
    </Link>
);