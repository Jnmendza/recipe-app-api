import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './globalStyles';
import { Hero } from './components/Hero';
import Products from './components/Products/index';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Dessert from './components/Dessert';

function App() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [recipeData, setRecipeData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const setIngredient = (input) => setSearch(input);

  const getRecipes = async (searchInput) => {
    setLoading(true)
    try{
      const url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=${searchInput}`;
      const res = await fetch(url, {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
          "x-rapidapi-host": "tasty.p.rapidapi.com"
        }
      });
      console.log(res.ok);
      const data = await res.json();
      setLoading(false);
      setRecipeData(data.results)
      setTotalPages(Math.ceil(data.results.length / 6))
      setPage(1)
    } catch(err) {
      console.error(err)
    }
  }

  const handleClick = (num) => {
    setPage(num)
  }

  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products 
        heading='Search recipes by ingredient' 
        search={search} 
        setIngredient={setIngredient} 
        getRecipes={getRecipes}
        recipeData={recipeData}
        page={page}
        totalPages={totalPages} 
        handleClick={handleClick}
        loading={loading}
      />
      <Feature
        index={2}
        heading="Pizza of the day" 
        subHeading="Truffle alfredo sauce topped with 24 carat gold dust."
      />
      <Dessert />
      <Footer />
    </Router>
  );
}

export default App;
