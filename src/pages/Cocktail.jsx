import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCocktailById } from '../api';
import { Preloader } from '../components/Preloader';
 
function Cocktail() {
    const [cocktail, setCocktail] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    useEffect(() => {
        getCocktailById(id).then((data) => setCocktail(data.drinks[0]));
    })
    return <>
            {!cocktail.idDrink ? <Preloader/> : (
            <div className='cocktail'>
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                <h1 className='title-list'>{cocktail.strDrink}</h1>
                <p>Category: {cocktail.strCategory}</p>
                <p>Alcoholic: {cocktail.strAlcoholic}</p>
                <p>Glass: {cocktail.strGlass}</p>
                <table className='centered'>
                <thead>
                    <tr>
                    <th>Ingredient</th>
                    <th>Measure</th>
                    </tr>
                </thead>
                <tbody>
                {
                    Object.keys(cocktail).map(key => {
                        if(key.includes('Ingredient') && cocktail[key]) {
                            return (
                                <tr key={key}>
                                <td>{cocktail[key]}</td>
                                <td>{
                                    cocktail[`strMeasure${key.slice(13)}`]
                                    }</td>
                                </tr>
                            )
                        }
                        return null;
                    })
                }
                </tbody>
                </table>
                <p>Instructions: {cocktail.strInstructions}</p>
                <button style={{margin: '2rem 0'}} className='btn' onClick={goBack}>Go back</button>
            </div>
        )}
    </>
} 

export { Cocktail }