import { Link } from 'react-router-dom';

function IngredientItem (props) {
    const {strIngredient1} = props;
    const imgSrc = `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Medium.png`;
    return <div className="card">
        <div className="card-image">
        <img src={imgSrc}  alt="alt"/>
        </div>
        <div className="card-content">
        <span className="card-title">{strIngredient1}</span>   
        </div>
        <div className="card-action">
        <Link to={`/ingredient/${strIngredient1}`} className="btn">Watch drinks </Link>
        </div>
    </div>
}

export { IngredientItem };