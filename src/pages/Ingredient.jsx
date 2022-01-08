import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getByIngredients } from '../api';
import { Preloader } from '../components/Preloader';
import { DrinksList } from '../components/DrinksList';

function Ingredient () {
    const {name} = useParams();
    const [drinks, setDrinks] = useState([]);
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    useEffect(() => {
            getByIngredients(name).then((data) => setDrinks(data.drinks));
    }, [name]);

    return <>
        <div className='title'>
        <h1 className='title-list'>Drinks with {name}</h1>
        <button className='btn' onClick={goBack}>Go back</button></div>
        {!drinks.length ? <Preloader/> : <DrinksList drinks={drinks}/>}
    </>
}

export { Ingredient }