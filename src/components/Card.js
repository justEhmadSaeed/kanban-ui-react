import React from 'react';
import PropTypes from 'prop-types';
import { ColumnType, TaskType } from '../utils/constants';

const Card = ({ taskNumber, taskDesc, taskType, taskColumn }) => {
	const onDragStart = (event, taskNo) => {
		event.dataTransfer.setData('taskNo', taskNo);
		event.dataTransfer.setData('taskColumn', taskColumn);
	};
	return (
		<div
			draggable
			onDragStart={(e) => onDragStart(e, taskNumber)}
			className={`card ${taskColumn} ${taskType}`}
		>
			<h4 className='task-number'>Task - {taskNumber}</h4>
			<p className='task-desc'>{taskDesc}</p>
			<div className='tags-list'>
				<div className='type-tag'>{taskType}</div>
			</div>
		</div>
	);
};
Card.propTypes = {
	taskNumber: PropTypes.string,
	taskDesc: PropTypes.string,
	taskType: PropTypes.oneOf(Object.values(TaskType)),
	taskColumn: PropTypes.oneOf(Object.values(ColumnType)),
};

Card.defaultProps = {
	taskNumber: '#',
	taskDesc: '...',
	taskType: TaskType.STORY,
	taskColumn: ColumnType.TODO,
};

export default Card;
