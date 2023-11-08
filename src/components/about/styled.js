import styled from "styled-components";

export const About = styled.section`

`
export const InfoContainer = styled.article`

`
export const InfoContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15rem;
    @media (max-width: 768px) {
        gap: 5rem;
    }
`
export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
export const Paragraph = styled.p`
    font-size: 20px;
    font-weight: 600;
    span {
        font-size: var(--p-font);
        color: var(--light-black);
    }   
    @media (max-width: 320px) {
        font-size: var(--p-font);
    }
`
export const SkillsContainer = styled.article`

`
export const SkillsContent = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
`
export const SkillsBox = styled.div`
    flex: 1 1 40rem;
`
export const Progress = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    &.progress2 div span {
        width: 90%;
    }
    &.progress3 div span {
        width: 80%;
    }
    &.progress4 div span {
        width: 75%;
    }
    &.progress5 div span {
        width: 85%;
    }
    &.progress6 div span {
        width: 80%;
    }
    &.progress7 div span {
        width: 70%;
    }
    &.progress8 div span {
        width: 65%;
    }
`
export const H4 = styled.h4`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: 600;
    color: var(--primary);
    span {
        color: var(--secondary);
    }
`
export const Bars = styled.div`
    position: relative;
    width: 100%;
    height: 1.2rem;
    border: 0.2rem solid var(--primary);
    border-radius: 2rem;
    span {
        position: absolute;
        top: 0;
        left: 0;
        width: 95%;
        height: 100%;
        background-color: var(--primary);
        border-radius: 2rem;
    }
`
export const CounterContainer = styled.article`
    display: flex;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 2rem;
`
export const CounterBox = styled.div`
    flex: 1 1 20rem;
    border: var(--border);
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: var(--box-shadow);
`
export const Icon = styled.i`
    color: var(--secondary);
    font-size: 3rem;
`
export const H5 = styled.h5`
    font-size: 4rem;
    font-weight: 600;
    color: var(--primary);
`
export const Text = styled.p`
    font-size: 2rem;
    font-weight: 400;
    color: var(--light-black);
    text-transform: capitalize;
`