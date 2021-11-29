import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ColumnBar from './ColumnBar';
import ColumnBody from './ColumnBody';

const TodoColumn = () => {
	return (
		<div id='todo-col'>
			<ColumnBar icon={faListAlt} title='To Do' color='blue' />
			<button className='add-new-btn'>+ Add New</button>
			<ColumnBody />
		</div>
	);
};

export default TodoColumn;
