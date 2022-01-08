import { IngredientItem } from './IngredientItem';

function IngredientList ({catalog=[]}) {
    return <>
    <h1 className='title-list'>Ingredients</h1>
    <div className="list">
          {catalog.map(el => (
              <IngredientItem key={el.strIngredient1} {...el}/>
          ))}  
    </div></>
}

export { IngredientList };