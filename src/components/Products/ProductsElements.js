import styled from 'styled-components';

export const ProductsContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    background: #150f0f;
    color: #fff;
`

export const ProductsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`

export const ProductCard = styled.div`
    margin: 0 2rem;
    line-height: 1.5;
    width: 300px;
    cursor: pointer;
`

export const ProductImg = styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #fdc500;
    object-fit: cover;
`

export const ProductsHeading = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 1rem;
`

export const IngredientsForm = styled.form`
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
    border: none;
`

export const SearchInput = styled.input`
    border: none;
    padding: 0 2rem;
    width: 350px;
    height: 50px;
    display: flex;
    align-items: center;

    &:focus {
        border: none;
    }
`

export const SearchBtn = styled.input`
    width: 100px;
    background-color: #fdc500;
    border: none;
    cursor: pointer;
`

export const ProductTitle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
`

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.2rem;
    text-align: center;
`

export const ProductDesc = styled.p`
    margin-bottom: 1rem;
`

export const ProductTime = styled.p`
    margin-bottom: 1rem;
    
`

export const ProductButton = styled.button`
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    background: #e31837;
    color: #fff;
    transition: 0.2 ease-out;

    &:hover {
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
`