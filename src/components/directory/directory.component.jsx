import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { DirectoryMenuContainer } from './directory.styles';
import {selectDirectorySections} from '../../redux/directory/directory.selectors'
import MenuItem from '../menu-item/menu-item.component';


const Directory = ({sections}) =>(
	<DirectoryMenuContainer>
		{sections.map(({ id, ...otherSectionProps }) => (
			<MenuItem key={id} {...otherSectionProps} />
		))}
	</DirectoryMenuContainer>
)

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);