import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ColumnBar from './ColumnBar';
import ColumnBody from './ColumnBody';

const InProgressColumn = () => {
	return (
		<div>
			<ColumnBar
				icon={faSpinner}
				title='In Progress'
				color='orange'
			/>
			<ColumnBody />
		</div>
	);
};

export default InProgressColumn;
