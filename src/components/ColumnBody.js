import React from 'react';
import Card from './Card';

const ColumnBody = ({ addTaskButton }) => {
	return (
		<div className='col-body'>
			{addTaskButton ? addTaskButton() : null}
			<Card />
			<Card />
		</div>
	);
};

export default ColumnBody;
