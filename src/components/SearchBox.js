 import React from 'react';

const SearchBox=({serchField,searchChange})=>{
	return(
		<div className='pa2 '>
			<input className='tc ba b--green bg-light-green'
			type='search' 
			placeholder='search robot'
			onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;