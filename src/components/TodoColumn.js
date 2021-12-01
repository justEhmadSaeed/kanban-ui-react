import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import ColumnBar from './ColumnBar';
import ColumnBody from './ColumnBody';

const TodoColumn = ({ setOpenPopUp }) => {
	const addTaskButton = () => (
		<button
			className='add-new-btn'
			onClick={() => setOpenPopUp(true)}
		>
			+
		</button>
	);
	return (
		<div id='todo-col'>
			<ColumnBar icon={faListAlt} title='To Do' color='blue' />

			<ColumnBody addTaskButton={addTaskButton} />
		</div>
	);
};

export default TodoColumn;
