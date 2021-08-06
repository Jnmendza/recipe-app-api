import styled from 'styled-components';

export const ModalBackground = styled.div`
    position: fixed;
    overflow: scroll;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 2rem;
    background-color: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(8px);
    
`

export const ModalContainer = styled.div`
    background-color: rgba(0,0,0,0.8);
    padding: 2rem;
    max-width: 60%;
    min-width: 500px;
    
    p:nth-child(3) {
        padding: 1.2rem 0;
        font-weight: bold;
        color: gray;
    }
`

export const ModalHeader = styled.div`
    padding-bottom: 1rem;
`

export const ModalTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;

    h1{
        color: #fdc500;
    }
`
export const ModalBody = styled.div`
    display: flex;
    justify-content: space-between;
    p {
        padding: 1rem;
    }

    @media screen and (max-width: 975px) {
        flex-direction: column;
        align-items: center;
    }
`

export const ModalVideo = styled.div`

`

export const ModalDesc = styled.p`

`

export const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 

`
export const ModalCloseBtn = styled.div`
    font-size: 1.8rem;
    cursor: pointer;
    padding: 0 0 0 2rem;
    &:hover {
        color: red;
    }
`