import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus} from 'react-icons/fi';

import { AccordionSection, AccordionContainer, Wrap, Dropdown } from './AccordionElements'

const Accordion = ({ heading, recipeItems }) => {
    const [clicked, setClicked] = useState(false);
    const toggle = () => setClicked(!clicked)
    return (
        <IconContext.Provider value={{ color: '#fdc500', size: '25px '}}>
            <AccordionSection>
                    <AccordionContainer>
                        <Wrap onClick={() => toggle()}>
                            <h1>{heading}</h1>
                            <span>{clicked ? <FiMinus /> : <FiPlus />}</span>
                        </Wrap>
                        {recipeItems.map((item, index) => {
                            return (
                                <>
                                {clicked ? (
                                    <Dropdown key={index}>
                                        <p>- {item.raw_text}</p>
                                    </Dropdown>
                                    ) : null}
                                </>
                            )
                        })}
                    </AccordionContainer>
            </AccordionSection>
        </IconContext.Provider>
    )
}

export default Accordion

