import React from 'react';
import { 
    HeroContainer, 
    HeroContent, 
    HeroItems, 
    HeroH1, 
    HeroP 
} from './HeroElements'

export const Hero = () => {

    return (
        <HeroContainer>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Recipes at your finger tips!</HeroH1>
                    <HeroP>Meals under 30 minutes</HeroP>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}
