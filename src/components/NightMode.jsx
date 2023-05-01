import React from 'react'
import { ThemeContext } from '../pages/context/ChangeThemeContext';
import { useContext } from 'react';


function NightMode() {

	const { color, changeNavColor } = useContext(ThemeContext);
	const { mode, changeMode } = useContext(ThemeContext);

	return (
		<div className='nightMode'>
			<label className="switch">
				<input type="checkbox" onClick={() => {
					changeMode(mode ? false : true)
				}} />
				<span className="slider">
					<span className="circle"></span>
				</span>
			</label>
			<div className="changeThems">
				<div onClick={() => {
					changeNavColor('red');
				}}></div>

				<div onClick={() => {
					changeNavColor('purple');
				}}></div>
				<div onClick={() => {
					changeNavColor('orange');
				}}></div>
				<div onClick={() => {
					changeNavColor('lime');
				}}></div>
			</div>
		</div>
	)
}

export default NightMode