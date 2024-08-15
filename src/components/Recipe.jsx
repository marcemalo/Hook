import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import './Recipe.css';
import { Link } from 'react-router-dom';

const Recipes = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [url, setUrl] = useState('https://dummyjson.com/recipes');
    const { data, loading, error } = useFetch(url);

    useEffect(() => {
        if (searchQuery) {
            setUrl(`https://dummyjson.com/recipes/search?q=${searchQuery}`);
        } else {
            setUrl('https://dummyjson.com/recipes');
        }
    }, [searchQuery]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    if (loading) return (
        <>
            <div className="loader-container">
                <div className="loader">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    );

    if (error) return <div>Error: {error.message}</div>;

    if (!data || !data.recipes) return <div>No recipes found</div>;

    return (
        <div className='wera'>
            <h1 className='lokiii'>Recipes</h1>
            <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                className="search-input"
            />
            <ul className='meedmjfn'>
                {data.recipes.map(recipe => (
                    <li key={recipe.id}>
                        <Link to={`/recipe/${recipe.id}`}>
                            <img className='sbdnab' src={recipe.image} alt={recipe.name} />
                        </Link>
                        <h2 className='djhsm'>{recipe.name}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Recipes;
