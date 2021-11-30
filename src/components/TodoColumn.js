import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import ColumnBar from './ColumnBar';
import ColumnBody from './ColumnBody';

const TodoColumn = ({ setOpenPopUp }) => {
	return (
		<div id='todo-col'>
			<ColumnBar icon={faListAlt} title='To Do' color='blue' />
			<button
				className='add-new-btn'
				onClick={() => setOpenPopUp(true)}
			>
				+ Add New
			</button>
			<ColumnBody />
		</div>
	);
};

export default TodoColumn;
