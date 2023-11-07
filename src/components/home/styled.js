import styled from "styled-components";
import homeImg from "../../assets/home.jpg";

export const Home = styled.section`
    height: 100vh;
    background: url(${homeImg})
    no-repeat center top / cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const HomeContent = styled.main`
    max-width: 70rem;
    height: auto;
    margin-top: 25rem;
`
export const H1 = styled.h1`
    font-size: var(--h1-font);
    font-weight: 600;
    text-transform: uppercase;
    color: var(--white);
    span {
        display: block;
        font-weight: 400;
    }
`