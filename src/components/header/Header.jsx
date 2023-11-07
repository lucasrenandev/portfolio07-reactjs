import { useState } from "react";
import { Header, Logo, NavBar, NavList, List, MenuIcon } from "./styled";
import { HashLink as Link } from "react-router-hash-link";
import { FaBars } from "react-icons/fa";

export default function header() {
    const [menuIcon] = useState(<FaBars/>);

    return(
        <Header>
            <Logo href="/">Portfolio</Logo>
            <NavBar>
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
            <MenuIcon>
                {menuIcon}
            </MenuIcon>
        </Header>
    )
}