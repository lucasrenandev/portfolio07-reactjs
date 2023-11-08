import styled from "styled-components";

export const Services = styled.section`
    background-color: #eee;
`
export const ServicesContent = styled.article`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    align-items: center;
    text-align: center;
    gap: 2rem;
    margin-top: 4rem;
    @media (max-width: 320px) {
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    }
`
export const Box = styled.div`
    padding: 2.5rem;
    background-image: linear-gradient(59deg, #ff47b233 50%, #fff 50.1%);
    border-radius: 0.5rem;
    box-shadow: var(--box-shadow);
`
export const H3 = styled.h3`
    font-size: 2.4rem;
    font-weight: 600;
    text-transform: capitalize;
`
export const Paragraph = styled.p`
    color: var(--light-black);
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.8;
    margin: 1rem 0 1.5rem;
`