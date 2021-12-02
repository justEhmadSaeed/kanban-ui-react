import React from 'react';
import Card from './Card';

const ColumnBody = ({ addTaskButton, tasks = [], taskColumn }) => {
	return (
		<div className='col-body'>
			{addTaskButton ? addTaskButton() : null}
			{tasks.map((task, key) => (
				<Card
					key={key}
					taskNumber={task.taskNumber}
					taskDesc={task.taskDesc}
					types={task.types}
					taskColumn={taskColumn}
				/>
			))}
		</div>
	);
};

export default ColumnBody;
