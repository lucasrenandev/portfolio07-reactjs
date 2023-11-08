import { useEffect, useRef, useState } from "react";
import { Header, Logo, NavBar, NavList, List, MenuIcon } from "./styled";
import { HashLink as Link } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function header() {
    const [menuIcon, setMenuIcon] = useState(<FaBars/>);
    const navRef = useRef(null);

    const toggleMenu = () => {
        if(!navRef.current.classList.contains("active")) {
            navRef.current.classList.add("active");
            setMenuIcon(<FaTimes/>);
        }
        else {
            navRef.current.classList.remove("active");
            setMenuIcon(<FaBars/>);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            navRef.current.classList.remove("active");
            setMenuIcon(<FaBars/>);
        });
    }, []);

    return(
        <Header>
            <Logo href="/">Portfolio</Logo>
            <NavBar ref={navRef}>
                <NavList>
                    <List>
                        <Link smooth to={"#home"}>Home</Link>
                    </List>
                    <List>
                        <Link smooth to={"#about"}>About</Link>
                    </List>
                    <List>
                        <Link smooth to={"#services"}>Services</Link>
                    </List>
                    <List>
                        <Link smooth to={"#project"}>Project</Link>
                    </List>
                    <List>
                        <Link smooth to={"#contact"}>Contact</Link>
                    </List>
                </NavList>
            </NavBar>
            <a href="#" className="button">Download CV</a>
            <MenuIcon onClick={toggleMenu}>
                {menuIcon}
            </MenuIcon>
        </Header>
    )
}