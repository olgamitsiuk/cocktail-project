import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllIngredients } from '../api';
import { Preloader } from '../components/Preloader';
import { IngredientList } from '../components/IngredientList';
import { Search } from '../components/Search';


function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const { pathname, search } = useLocation();
    const navigate = useNavigate();
    //console.log(navigate);

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter((item) => 
                item.strIngredient1.toLowerCase().includes(str.toLowerCase()))
        );
        navigate({
            pathname,
            search: `?search=${str}`,
        })
    }

    useEffect(() => {
        getAllIngredients().then(data => {
            setCatalog(data.drinks);
            setFilteredCatalog(
                search 
                ? data.drinks.filter((item) => 
                item.strIngredient1.toLowerCase().includes(search.split('=')[1].toLowerCase()))
                : data.drinks );
        })
    }, [search])

    return <>
        <Search cb={handleSearch}/>
        {!catalog.length ? <Preloader /> : (
            <IngredientList catalog={filteredCatalog} />
        )}
    </>
}
export {Home};