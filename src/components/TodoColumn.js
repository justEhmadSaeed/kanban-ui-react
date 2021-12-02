import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import ColumnBar from './ColumnBar';
import ColumnBody from './ColumnBody';

const TodoColumn = ({ setOpenPopUp, tasks }) => {
	const addTaskButton = () => (
		<button
			className='add-new-btn'
			onClick={() => setOpenPopUp(true)}
		>
			+
		</button>
	);
	return (
		<div className='task-column' id='todo-col'>
			<ColumnBar icon={faListAlt} title='To Do' color='blue' />
			<ColumnBody tasks={tasks} addTaskButton={addTaskButton} />
		</div>
	);
};

export default TodoColumn;
