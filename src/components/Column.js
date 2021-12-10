import React from 'react';
import ColumnBar from 'Components/ColumnBar';
import ColumnBody from 'Components/ColumnBody';
import PropTypes from 'prop-types';
import { ColumnType, ColumnTypeProperties } from 'utils/constants';

const Column = ({
	addTaskButton,
	tasks,
	transferTask,
	columnType
}) => {
	const onDragOver = (event) => {	
		event.preventDefault();
	};
	const onDrop = (event) => {
		const targetTaskNo = event.dataTransfer.getData('taskNo');
		transferTask(targetTaskNo, columnType);
	};
	return (
		<div
			onDragOver={onDragOver}
			onDrop={onDrop}
			className="task-column"
		>
			<ColumnBar
				title={columnType}
				icon={ColumnTypeProperties[columnType].icon}
				color={ColumnTypeProperties[columnType].color}
			/>
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
	columnType: PropTypes.oneOf(Object.values(ColumnType)).isRequired
};

Column.defaultProps = {
	addTaskButton: undefined,
	tasks: [],
	transferTask: undefined,
	columnType: ColumnType.TODO
};
export default Column;
