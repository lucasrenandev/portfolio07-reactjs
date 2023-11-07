import styled from "styled-components";

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--white);
    padding: 2rem 9%;
    box-shadow: var(--box-shadow);
`
export const Logo = styled.a`
    color: var(--black);
    font-size: 2.5rem;
    font-weight: 600;
`
export const NavBar = styled.nav`

`
export const NavList = styled.ul`
    display: flex;
    align-items: center;
`
export const List = styled.li`
    margin: 0 1rem;
    a {
        color: var(--black);
        font-size: var(--p-font);
        font-weight: 400;
        transition: color 0.35s ease;
        &:hover {
            color: var(--primary);
        }
    }
`
export const MenuIcon = styled.i`
    font-size: 2rem;
    z-index: 1010;
    cursor: pointer;
    display: none;
`