import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import "./RecipeDetail.css"

const RecipeDetail = () => {
    const { id } = useParams(); // Get the recipe id from URL parameters
    const { data: recipe, loading, error } = useFetch(`https://dummyjson.com/recipes/${id}`);

    if (loading) return <div><><div class="loader-container">
    <div class="loader">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div><div class="loader-container">
    <div class="loader">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div></></div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!recipe) return <div>Recipe not found</div>;

    return (
        <div className='hdfbmcs'>
            <h1 className='dfhbjdxhcn'>{recipe.title}</h1>
            <p className='zdxnhd'>{recipe.description}</p>
            <img className='xndxsnrf' src={recipe.image} alt={recipe.title} style={{ maxWidth: '300px' }} />
            <h1 className='sxdmnzfb'>{recipe.name}</h1>
            <h3 className='jsahefgvshmn'>{recipe.ingredients}</h3>
            <h5 className='oooo'>{recipe.instructions}</h5>
            <Link to={"/"}><button className='ghsaj'>Go to Home</button></Link>
        </div>
    );
};

export default RecipeDetail;
