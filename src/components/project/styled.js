import styled from "styled-components";

export const Project = styled.section`

`
export const ProjectContent = styled.figure`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;
`
export const Box = styled.a`
    position: relative;
    &:hover i {
        display: flex;
    }
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const Icon = styled.i`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: #ff47b233;
    color: #fff;
    font-size: 6rem;
    align-items: center;
    justify-content: center;
    display: none;
`