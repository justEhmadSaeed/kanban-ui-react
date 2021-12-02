import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ColumnBar from './ColumnBar';
import ColumnBody from './ColumnBody';

const TodoColumn = ({ setOpenPopUp, tasks, transferTask }) => {
	const addTaskButton = () => (
		<button
			className='add-new-btn'
			onClick={() => setOpenPopUp(true)}
		>
			+
		</button>
	);
	const onDragOver = (event) => {
		event.preventDefault();
	};
	console.log(tasks);
	const onDrop = (event) => {
		const targetTaskNo = event.dataTransfer.getData('taskNo');
		const sourceCol = event.dataTransfer.getData('taskColumn');
		transferTask(targetTaskNo, sourceCol, 'todo');
	};
	return (
		<div
			onDragOver={onDragOver}
			onDrop={onDrop}
			className='task-column'
			id='todo-col'
		>
			<ColumnBar icon={faListAlt} title='To Do' color='blue' />
			<ColumnBody
				tasks={tasks}
				addTaskButton={addTaskButton}
				taskColumn='todo'
				transferTask={transferTask}
			/>
		</div>
	);
};

export default TodoColumn;
