import styled from "styled-components";

export const Contact = styled.section`
    background-color: #eee;
`
export const ContactContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);  
    align-items: center;
    border: var(--border);
    border-radius: 0.5rem;
    margin-top: 4rem;
    box-shadow: var(--box-shadow);  
    @media (max-width: 992px) {
        grid-template-columns: 1fr;
    }
`
export const Image = styled.figure`
    width: 100%;
    height: 100%;
    @media (max-width: 992px) {
        display: none;
    }
`
export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const Form = styled.form`
    padding: 3rem 2rem 2rem;
    button {
        cursor: pointer;
        margin-top: 1.2rem;
    }
`
export const InputField = styled.div`
    position: relative;
    &:not(.text-area) {
        margin-bottom: 3rem;
    }
`
export const Input = styled.input`
    width: 100%;
    padding: 0.6rem 1rem;
    border: var(--border);
    border-radius: 0.5rem;
    &:focus ~ label,
    &:valid ~ label {
        transform: translate(-8px, -25px);
        color: var(--primary);
        font-size: 1.3rem;
    }
`
export const Label = styled.label`
    position: absolute;
    top: 6px;
    left: 10px;
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--light-black);
    transition: all 0.35s ease;
`
export const TextArea = styled.textarea`
    width: 100%;
    resize: none;
    border-radius: 0.5rem;
    border: var(--border); 
    padding: 0.6rem 1rem;
    &:focus ~ label,
    &:valid ~ label {
        transform: translate(-8px, -25px);
        color: var(--primary);
        font-size: 1.3rem;
    }
`