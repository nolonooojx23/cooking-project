import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projectFireStore } from '../firebase/config'

function Recipe() {
	const {id}= useParams()
	
	const [data, setData] = useState(null)
	const [isPending, setIsPending] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		setIsPending(true)
		projectFireStore.collection("recipes").doc(id).get().then((doc)=>{
			setData(doc.data());
			setIsPending(false);
		})
	}, [])

	return (
		<div className='recipe'>	
		{isPending && <div className="loader">
					<div className="dot"></div>
					<div className="dot"></div>
					<div className="dot"></div>
				</div>}
			 {data && (
				<div className="recipe_box" key={data.id}>
				<h1>{data.title}</h1>
				<h2>Cooking time: {data.cookingTime} minutes</h2>
				<p><b>Ingredients: </b> {data.ingredients.map(item =>{
					return <span>{item} ; </span>
				})}</p>
				<p className='method'>{data.method}</p>
				<Link className='link' to='/'><button className='btn-donate'>back</button></Link>
			</div>
			 )}
		</div>
	)
}

export default Recipe