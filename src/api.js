import { API_URL } from './config';

const getCocktailById = async (cocktailId) => {
    const response = await fetch(API_URL + 'lookup.php?i=' + cocktailId);
    return await response.json();
};

const getAllIngredients = async () => {
    const response = await fetch(API_URL + 'list.php?i=list');
    return await response.json();
}

const getByIngredients = async (ingName) => {
    const response = await fetch(API_URL + 'filter.php?i=' + ingName);
    return await response.json();
}

export { getCocktailById, getAllIngredients, getByIngredients };