import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", Arial, Helvetica, sans-serif;
        list-style: none;
        text-decoration: none;
        border: none;
        outline: none;
    }

    :root {
        --primary: #881f50;
        --secondary: #df438c;
        --black: #000;
        --white: #fff;
        --light-black: #666;
        --light-bg: #eee;
        --h1-font: 6rem;
        --h2-font: 4.5rem;
        --p-font: 1.7rem;
        --border: 0.2rem solid rgba(0, 0, 0, 0.1);
        --box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
        scroll-padding-top: 7rem;
    }

    html::-webkit-scrollbar {
        width: 1rem;
    }

    html::-webkit-scrollbar-track {
        background-color: transparent;
    }

    html::-webkit-scrollbar-thumb {
        background-color: var(--primary);
    }

    body {
        background-color: var(--white);
        color: var(--black);
    }

    section {
        width: 100%;
        padding: 5rem 7%;
    }

    .heading {
        text-align: center;
    }

    .heading h2 {
        font-size: var(--h2-font);
        font-weight: 600;
        text-transform: uppercase;
        span {
            color: var(--primary);
        }
    }

    .title {
        text-align: center;
        font-size: 3rem;
        font-weight: 600;
        color: var(--primary);
        text-transform: capitalize;
        margin: 3rem 0;
    }

    .button {
        display: inline-block;
        padding: 0.6rem 2.5rem;
        background-color: var(--primary);
        color: var(--white);
        font-size: var(--p-font);
        font-weight: 400;
        border-radius: 4rem;
        transition: background-color 0.35s ease;
        &:hover {
            background-color: var(--secondary);
        }
    }
`