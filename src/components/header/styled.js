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
    padding: 2rem 9%;
    background-color: var(--white);
    box-shadow: var(--box-shadow);
    @media (max-width: 992px) {
        .button {
            display: none;
        }
    }
`
export const Logo = styled.a`
    color: var(--black);
    font-size: 2.5rem;
    font-weight: 600;
`
export const NavBar = styled.nav`
    @media (max-width: 768px) {
        position: absolute;
        top: 100%;
        right: -100%;
        width: 30rem;
        height: 100vh;
        background-color: var(--white);
        padding: 12rem 0;
        border-top: var(--border);
        transition: right 0.35s ease;
        &.active {
            right: 0;
        }
    }
`
export const NavList = styled.ul`
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`
export const List = styled.li`
    margin: 0 1rem;
    @media (max-width: 768px) {
        margin: 1rem 0;
    }
    a {
        color: var(--black);
        font-size: var(--p-font);
        font-weight: 400;
        transition: color 0.35s ease;
        &:hover {
            color: var(--primary);
        }
        @media (max-width: 768px) {
            display: block;
            font-size: 2rem;
        }
    }
`
export const MenuIcon = styled.i`
    font-size: 2rem;
    z-index: 1010;
    cursor: pointer;
    display: none;
    @media (max-width: 768px) {
        display: inline-flex;
        align-items: center;
    }
`