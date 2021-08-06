import styled from 'styled-components';

export const NumContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
`

export const Numbers = styled.button`
    margin: 0 1.5rem;
    cursor: pointer;
    background: transparent;
    color: ${(props) => props.color};
    border: none;
    border-bottom: ${(props) => props.border};
    padding: 0.5rem;
    font-size: 1rem;

    &:hover {
        color: #fdc500
    }
    
    
`