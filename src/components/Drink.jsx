import {Link} from 'react-router-dom';

function Drink (props) {
    const {strDrink, idDrink, strDrinkThumb} = props;
    return <div className="card">
        <div className="card-image">
        <img src={strDrinkThumb}  alt="alt"/>
        </div>
        <div className="card-content">
        <span className="card-title">{strDrink}</span>   
        </div>
        <div className="card-action">
        <Link to={`/cocktail/${idDrink}`} className="btn">Watch Cocktail</Link>
        </div>
    </div>
}

export { Drink }