import React from 'react';


const Card=({id,name,email})=>{
	// const {id,name,email}=props;
	return(
			<div className="bg-dark-green washed-green pa3 dib tc ma2 br3 grow bw2 shadow-3">
				<img alt='robot' src ={`https://robohash.org/${id}?size=200x200`}/>
					<div>
						<h2>{name}</h2>
						<p>{email}</p>
					</div>
			</div>
		);
}

export default Card;