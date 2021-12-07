import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ColumnBar from './ColumnBar';
import ColumnBody from './ColumnBody';
import PropTypes from 'prop-types';
import { ColumnType } from '../utils/constants';

const Column = ({
	addTaskButton,
	tasks,
	transferTask,
	columnType,
}) => {
	const onDragOver = (event) => {
		event.preventDefault();
	};
	const onDrop = (event) => {
		const targetTaskNo = event.dataTransfer.getData('taskNo');
		// const sourceCol = event.dataTransfer.getData('taskColumn');
		transferTask(targetTaskNo, columnType);
	};
	return (
		<div
			onDragOver={onDragOver}
			onDrop={onDrop}
			className='task-column'
		>
			<ColumnBar icon={faListAlt} title={columnType} color='blue' />
			<ColumnBody
				tasks={tasks}
				addTaskButton={addTaskButton}
				taskColumn={columnType}
				transferTask={transferTask}
			/>
		</div>
	);
};

Column.propTypes = {
	addTaskButton: PropTypes.func,
	tasks: PropTypes.array,
	transferTask: PropTypes.func.isRequired,
	columnType: PropTypes.oneOf(Object.values(ColumnType)).isRequired,
};

Column.defaultProps = {
	addTaskButton: undefined,
	tasks: [],
	transferTask: undefined,
	columnType: ColumnType.TODO,
};
export default Column;
