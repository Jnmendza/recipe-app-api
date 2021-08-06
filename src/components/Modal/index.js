import React from 'react'
import { 
    ModalBackground,
    ModalContainer,
    ModalHeader,
    ModalCloseBtn,
    ModalTitle,
    ModalBody,
    ModalDesc,
    ModalVideo,
    ModalFooter,
 } from './ModalElements'
 import Accordion from '../Accordion';

const Modal = ({ show, onHide, recipe }) => {
    const { name, original_video_url, sections, description, thumbnail_url } = recipe;    
    return (
        <>
        {show && (
            <ModalBackground>
                <ModalContainer>
                    <ModalHeader>
                        <ModalTitle>
                            <h1>{name}</h1>
                            <ModalCloseBtn onClick={onHide}>X</ModalCloseBtn>
                        </ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <ModalVideo>
                        {original_video_url ? <video width="320" height="240" controls>
                        <source src={original_video_url} type="video/mp4" />
                        </video> : <img src={thumbnail_url} width="320" height="240" alt={name}/>}
                        </ModalVideo>
                        <ModalDesc>{description || "No need for a description. This dish speaks for itself!"}</ModalDesc>
                    </ModalBody>
                        <p>Ingredients</p>
                        {sections.map((item, index) => {
                            return (
                                <Accordion key={index} heading={item.name || `${name} ingredients`} recipeItems={item.components} />
                            )
                        })}
                        <ModalFooter><ModalCloseBtn onClick={onHide}>Close</ModalCloseBtn></ModalFooter>
                </ModalContainer>
            </ModalBackground>
            )}
        </>
    )
}

export default Modal