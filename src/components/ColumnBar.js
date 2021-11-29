import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ColumnBar = ({ title, icon, color }) => {
	return (
		<nav className='column-bar'>
			<FontAwesomeIcon icon={icon} color={color} />
			<h4 className='column-heading'>{title}</h4>
		</nav>
	);
};

export default ColumnBar;
