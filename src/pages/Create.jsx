import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectFireStore } from '../firebase/config';

function Create() {
	

	const [title, setTitle] = useState("");
	const [method, setMethods] = useState("");
	const [cookingTime, setCookingTime] = useState("");
	const [ingredient, setIngredient] = useState("");
	const [ingredients, setIngredients] = useState([]);
	const navigate = useNavigate()


	const handleSubmit = (e) => {
		e.preventDefault()
		const obj = {
			title,
			ingredients,
			method,
			cookingTime: cookingTime + " minutes",
		}
		projectFireStore.collection("recipes").add(obj)
		navigate('/')
	}

	const handleClick = () => {

		if (ingredients.includes(ingredient)) {
			alert("you always enter this ingredient");
		} else {
			setIngredients((ingredients) => {
				return [...ingredients, ingredient]
			})
		}

		setIngredient("");
	}
	


	return (
		<div className='create'>
			<div className="create_box">
				<h1>Create</h1>
				<form onSubmit={handleSubmit}>
					<p>Title:</p>
					<input type="text"
					required
						onChange={(e) => {
							setTitle(e.target.value)
						}}
						autoFocus value={title} />
					<p>Ingredients:</p>
					<div className="input_btn">
						<input type="text"
							onChange={(e) => {
								setIngredient(e.target.value);
							}
							}
							value={ingredient}
						/>
						<button onClick={handleClick} type='submit' >ADD</button>
					</div>
					<h5>Ingredients:{ingredients.map(item => {
						return <span key={item.id}> {item}; </span>
					})}</h5>
					<p>Methods:</p>
					<input type="text"
					required
						onChange={(e) => {
							setMethods(e.target.value)
						}} value={method} />
					<p>cookingTime:</p>
					<input required type="text" onChange={(e) => {
						setCookingTime(e.target.value)
					}} value={cookingTime} />
					<button type='submit'>Sumbit</button>
				</form>
			</div>
		</div>
	)
}

export default Create