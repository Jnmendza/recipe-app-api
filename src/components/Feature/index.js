import React from 'react'
import { FeatureContainer } from './FeatureElements'
import PizzaPic from '../../images/featured3.jpg';
import FoodPic from '../../images/food.jpg'

const Feature = ({ heading, subHeading, index }) => {
    return (
        <FeatureContainer background={index===2 ? `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0,0,0,0.1)), url(${PizzaPic})` : `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0,0,0,0.1)), url(${FoodPic})`}>
            <h1>{heading}</h1>
            <p>{subHeading}</p>
        </FeatureContainer>
    )
}

export default Feature 