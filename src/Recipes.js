import React from 'react';
import './Recipes.css'

const Recipes = ({title, img, calories, ingredients})=>{
	return(
					<div className='div'>
					        <h1 className='title' >{title}</h1>
									<p className='Calories' >Calories: {calories}</p>
									<img src={img} alt={title} />
									<ul className='contenedor' >
													{ingredients.map(i=>(
														<li className='ingredients'>{i.text}</li>
													))}
									</ul>
					</div>
		);
}

export default Recipes;
