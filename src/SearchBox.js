import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa2 search'>
			<input 
				className='search'
				id='mainSearch' 
				type='search' 
				placeholder='search resources...'
				onChange={searchChange} 
				autofocus='true'
			/>
		</div>
	);
}

export default SearchBox;