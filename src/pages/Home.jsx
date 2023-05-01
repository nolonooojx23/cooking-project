import React, { useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { projectFireStore } from '../firebase/config';

function Home() {

	const [data, setData] = useState(null)
	const [isPending, setIsPending] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		setIsPending(true)
		projectFireStore.collection("recipes").onSnapshot((data) => {

				const result = []
				data.docs.map((item) => {
					result.push({ ...item.data(), id: item.id })
				})
				
				setData(result)
				setIsPending(false)


				if (!result.length) {
					setError("https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?w=2000")
				}
			})
	}, [])


	const handelDelete = (id) => {
		projectFireStore.collection("recipes").doc(id).delete()
	}

	return (
		<div className='home'>
			<div className="home_boxs">
				{isPending && <div className="loader">
					<div className="dot"></div>
					<div className="dot"></div>
					<div className="dot"></div>
				</div>}
				{data &&
				data.map(item => {
					return (
						<div className="home_box" key={item.id} >
							<div className="title">
								<h1>{item.title}</h1>
								<DeleteIcon onClick={() => {
									handelDelete(item.id)
								}} className='del' />
							</div>
							<p>{item.ingredients.map((item) => {
								return <span>{item} {''}</span>
							})}</p>
							<p>{item.method.substr(0, 100)}...</p>
							<div className="home_btn">
								<Link to={`/recipe/${item.id}`}><button>Read more</button></Link>
							</div>
							<div className="home_bg">
							</div>
						</div>)
				})}

				{error && <img className='error' src={error} alt="" />}
			
			</div>
		</div>
	)
}

export default Home