import React, { useState } from 'react';
import {
    ProductsContainer,
    ProductsHeading,
    ProductsWrapper,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitle,
    SearchInput,
    IngredientsForm,
    SearchBtn
} from './ProductsElements';
import Modal from '../Modal';
import Feature from '../Feature';
import Pagination from '../Pagination'

const RECIPE_PER_PAGE = 6;

const Products = ({ 
    heading, 
    search, 
    setIngredient, 
    getRecipes, 
    recipeData, 
    page, 
    totalPages, 
    handleClick,
    loading 
}) => {
    const [openModal, setOpenModal] = useState({ showModal: 0});
    const startIndex = ( page - 1) * RECIPE_PER_PAGE;
    const selectedRecipeData = recipeData.slice(startIndex, startIndex + RECIPE_PER_PAGE)

    const onSubmit = (e) => {
        e.preventDefault();
        getRecipes(search)
    }

    const getModal = value => setOpenModal({ showModal: value })
    const hideModal = value => setOpenModal({ showModal: 0 })

    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <IngredientsForm onSubmit={onSubmit}>
                <SearchInput
                    type="text"
                    placeholder="Enter ingredient..."
                    value={search}
                    onChange={e => setIngredient(e.target.value)}
                />
                <SearchBtn type="submit" value="Search" />
            </IngredientsForm>
            <Pagination 
                page={page}
                totalPages={totalPages} 
                handleClick={handleClick} 
            />
            <ProductsWrapper>
                {selectedRecipeData.length > 0 ? 
                    selectedRecipeData.map((recipe, index) => {
                    return (
                        <div key={index}>
                        <ProductCard  onClick={() => getModal(recipe.id)}>
                            <ProductImg src={recipe.thumbnail_url} alt={recipe.seo_title} />
                            <ProductInfo>
                                <ProductTitle>{recipe.name}</ProductTitle>
                            </ProductInfo>
                        </ProductCard>
                        <Modal 
                            show={openModal.showModal === recipe.id}
                            onHide={() => hideModal(recipe.id)}
                            recipe={recipe}
                        />
                        </div>
                        )
                    }) : loading ? <p>Loading...</p> : <Feature 
                        heading="Choose from a variety of recipes"
                        subHeading="Finding Recipes For Ingredients You Already Have"
                    />  }
            </ProductsWrapper>
        </ProductsContainer>
    )
    
}

export default Products;

