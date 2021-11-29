import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ColumnBar from './ColumnBar';

const DoneColumn = () => {
	return (
		<div>
			<ColumnBar icon={faCheckSquare} title='Done' color='green' />
		</div>
	);
};

export default DoneColumn;
