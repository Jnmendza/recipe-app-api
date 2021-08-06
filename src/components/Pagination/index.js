import React from 'react'
import { NumContainer, Numbers } from './PaginationElements'

const Pagination = ({ totalPages, handleClick, page }) => {
    const pages = [...Array(totalPages).keys()].map(num => num + 1)
    return (
        <NumContainer>
            { pages.map((num, index) => (
                <Numbers 
                    color={page===num ? 'red' : 'white'} 
                    border={page===num ? '1px solid red' : 'none'}
                    key={index} 
                    onClick={() => handleClick(num)}>{num}
                </Numbers>
            ))}
        </NumContainer>
    )
}

export default Pagination
