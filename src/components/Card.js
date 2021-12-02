import React from 'react';

const Card = ({ taskNumber, taskDesc, types = [] }) => {
	return (
		<div className='card'>
			<h4 className='task-number'>Task - {taskNumber}</h4>
			<p className='task-desc'>{taskDesc}</p>
			<div className='tags-list'>
				{types.map((tag, key) => (
					<div className='type-tag' key={key}>
						{tag}
					</div>
				))}
			</div>
		</div>
	);
};

export default Card;
