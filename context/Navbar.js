import Link from "next/link"

import navStyles from "../styles/Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={navStyles.Nav}>
            <Link href='/news'><h1 className={navStyles.NavLogo}>NewsCentral</h1></Link>
            <Link href='/news/business'>Business</Link>
            <Link href='/news/entertainment'>Entertainment</Link>
            <Link href='/news/general'>General</Link>
            <Link href='/news/health'>Health</Link>
            <Link href='/news/science'>Science</Link>
            <Link href='/news/technology'>Technology</Link>
            <Link href='/news/sports'>Sports</Link>

        </nav>
    );
}

export default Navbar;