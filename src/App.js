import React,{ useState, useEffect } from 'react';

import Recipes from './Recipes'

import './App.css';


const App = ()=>{

				const APP_ID = 'bc155e0f';
				const APP_KEY = '945f66d20b8dfc72ebc82e37f441dae8';

				const [recetas, setRecetas] = useState([]);
				const [busqueda, setBusqueda] = useState('');
				const [query, setQuery] = useState('carne')
				console.log(recetas);

				const boton = (event)=>{
								event.preventDefault();
								setQuery(busqueda);
								//console.log(query)
				}

				useEffect(() =>{
								getRecipes();
				},[query])

				const getRecipes = async () => {
								const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
								const data = await res.json();
								setRecetas(data.hits);
				}

				const cambioInput = (e) =>{
								setBusqueda(e.target.value);
								//console.log(busqueda);
				}

				return(
								<div className="App">
												<h1 className='title'>APP DE RECETAS</h1>
												<form className="search-form">
																<input type="text" className="search-bar" value={busqueda} onChange={cambioInput} placeholder='Busca tu receta favorita'/>
																<button type="submit" className="search-button" onClick={boton}>Search</button>
												</form>
												<div className='recipes-content'>
																{recetas.map(i=>(
																<Recipes 
																key={i.recipe.calories}
																img={i.recipe.image}
																calories={i.recipe.calories}
																ingredients={i.recipe.ingredients}
																title={i.recipe.label}/>
																))}
												</div>
								</div>
								);
}

export default App;
