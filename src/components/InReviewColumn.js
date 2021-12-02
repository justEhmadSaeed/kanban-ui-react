import { faEye } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ColumnBar from './ColumnBar';
import ColumnBody from './ColumnBody';

const InReviewColumn = ({ transferTask, tasks }) => {
	const onDragOver = (event) => {
		event.preventDefault();
	};
	const onDrop = (event) => {
		const targetTaskNo = event.dataTransfer.getData('taskNo');
		const sourceCol = event.dataTransfer.getData('taskColumn');
		transferTask(targetTaskNo, sourceCol, 'inReview');
	};
	return (
		<div
			onDragOver={onDragOver}
			onDrop={onDrop}
			className='task-column'
		>
			<ColumnBar icon={faEye} title='In Review' color='purple' />
			<ColumnBody
				taskColumn='inReview'
				transferTask={transferTask}
				tasks={tasks}
			/>
		</div>
	);
};

export default InReviewColumn;
