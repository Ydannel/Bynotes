import React from 'react';

const Header = ({ handleToggleDarkMode }) => {

	/*
	handletoggledark == false == white background
	||
	handle togglledakr == true == black background
	*/
	return (
		<div className='header'>
			<h1>Notes</h1>
			<button
				onClick={() =>
					//dark mode
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				Dark Mode
			</button>
		</div>
	);
};

export default Header;
