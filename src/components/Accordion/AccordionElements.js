import styled from 'styled-components';

export const AccordionSection = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 50%;
`

export const AccordionContainer = styled.div`
    min-width: 40%;
    margin-bottom: 1rem;
    box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`

export const Wrap = styled.div`
    background: #272727;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: center;
    cursor: pointer;

    h1{
        padding: 0.8rem;
        font-size: 1rem;
    }

    span {
        margin-right: 1.5rem;
    }
`

export const Dropdown = styled.div`
    background: #1c1c1c;
    width: 100%;
    transition:  
    height 0.3s ease-in-out,
    opacity 0.3s 0.3s ease-in-out;

    p{
        padding: 0.6rem 2rem;
    }
`