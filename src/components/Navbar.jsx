import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../pages/context/ChangeThemeContext';

function Navbar() {
	const {color , changeNavColor} = useContext(ThemeContext);
	
	return (
		<div className='navbar' style={{background: color}} >
			<Link to='/' className='link'><h1>Cocking Logo</h1></Link>
			<Link to="/create" className='link'><button>create</button></Link>
		</div>
	)
}

export default Navbar