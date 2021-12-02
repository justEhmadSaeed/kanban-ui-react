import React from 'react';
import Card from './Card';

const ColumnBody = ({ addTaskButton, tasks = [] }) => {
	return (
		<div className='col-body'>
			{addTaskButton ? addTaskButton() : null}
			{tasks.map((task, key) => (
				<Card
					key={key}
					taskNumber={task.taskNumber}
					taskDesc={task.taskDesc}
					types={task.types}
				/>
			))}
		</div>
	);
};

export default ColumnBody;
