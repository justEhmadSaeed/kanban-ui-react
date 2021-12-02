import React from 'react';

const Card = ({ taskNumber, taskDesc, type, taskColumn }) => {
	const onDragStart = (event, taskNo) => {
		event.dataTransfer.setData('taskNo', taskNo);
		event.dataTransfer.setData('taskColumn', taskColumn);
	};
	return (
		<div
			draggable
			onDragStart={(e) => onDragStart(e, taskNumber)}
			className={`card ${taskColumn} ${type}`}
		>
			<h4 className='task-number'>Task - {taskNumber}</h4>
			<p className='task-desc'>{taskDesc}</p>
			<div className='tags-list'>
				<div className='type-tag'>{type}</div>
			</div>
		</div>
	);
};

export default Card;
