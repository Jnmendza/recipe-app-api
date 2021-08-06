import React from 'react';
import {DessertData} from './data'
import { 
    ProductsContainer,
    ProductsHeading,
    ProductsWrapper,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitle
 } from '../Products/ProductsElements'

const Dessert = () => {
    return (
        <ProductsContainer>
            <ProductsHeading>Dessert Treats</ProductsHeading>
            <ProductsWrapper>
                {DessertData.map((item, index) => {
                    return (
                        <ProductCard key={index}>
                            <ProductImg src={item.image} />
                            <ProductInfo>
                                <ProductTitle>{item.name}</ProductTitle>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductsWrapper>
        </ProductsContainer>
    )
}

export default Dessert