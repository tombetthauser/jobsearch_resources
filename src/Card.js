import React from 'react';

const Card = (props) => {
	return (
		<a target='new' href={props.email}>
			<div className='dib card'>
				<h2>{props.name}</h2>
				<p>{props.city}</p>
			</div>
		</a>
	);
}

export default Card;