import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ColumnBar from './ColumnBar';
import ColumnBody from './ColumnBody';

const InProgressColumn = ({ transferTask, tasks }) => {
	const onDragOver = (event) => {
		event.preventDefault();
	};
	const onDrop = (event) => {
		const targetTaskNo = event.dataTransfer.getData('taskNo');
		const sourceCol = event.dataTransfer.getData('taskColumn');
		transferTask(targetTaskNo, sourceCol, 'inProgress');
	};

	return (
		<div
			onDragOver={onDragOver}
			onDrop={onDrop}
			className='task-column'
		>
			<ColumnBar
				icon={faSpinner}
				title='In Progress'
				color='orange'
			/>
			<ColumnBody taskColumn='inProgress' tasks={tasks} />
		</div>
	);
};

export default InProgressColumn;
