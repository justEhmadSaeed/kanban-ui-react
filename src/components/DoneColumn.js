import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ColumnBar from './ColumnBar';
import ColumnBody from './ColumnBody';

const DoneColumn = () => {
	return (
		<div>
			<ColumnBar icon={faCheckSquare} title='Done' color='green' />
			<ColumnBody />
		</div>
	);
};

export default DoneColumn;
