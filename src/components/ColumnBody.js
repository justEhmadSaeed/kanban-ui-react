import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import { ColumnType } from '../utils/constants';

const ColumnBody = ({ addTaskButton, tasks, taskColumn }) => {
	return (
		<div className='col-body'>
			{addTaskButton ? addTaskButton() : null}
			{tasks.map((task, key) => (
				<Card
					key={key}
					taskNumber={task.taskNumber}
					taskDesc={task.taskDesc}
					taskType={task.type}
					taskColumn={taskColumn}
				/>
			))}
		</div>
	);
};

ColumnBody.propTypes = {
	addTaskButton: PropTypes.func,
	tasks: PropTypes.array,
	taskColumn: PropTypes.oneOf(Object.values(ColumnType)),
};

ColumnBody.defaultProps = {
	addTaskButton: undefined,
	tasks: [],
	taskColumn: ColumnType.TODO,
};
export default ColumnBody;
