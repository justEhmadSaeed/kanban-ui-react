import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ColumnBar from './ColumnBar';
import ColumnBody from './ColumnBody';

const DoneColumn = ({ tasks, transferTask }) => {
	const onDragOver = (event) => {
		event.preventDefault();
	};
	const onDrop = (event) => {
		const targetTaskNo = event.dataTransfer.getData('taskNo');
		const sourceCol = event.dataTransfer.getData('taskColumn');
		transferTask(targetTaskNo, sourceCol, 'done');
	};
	return (
		<div
			onDragOver={onDragOver}
			onDrop={onDrop}
			className='task-column'
		>
			<ColumnBar icon={faCheckSquare} title='Done' color='green' />
			<ColumnBody
				taskColumn='done'
				tasks={tasks}
				transferTask={transferTask}
			/>
		</div>
	);
};

export default DoneColumn;
