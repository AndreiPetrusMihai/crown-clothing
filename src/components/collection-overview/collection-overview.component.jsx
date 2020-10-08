import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component.jsx';
import {CollectionOverviewContainer} from "./collection-overview.styles";
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors.js';



const CollectionOverview = ({collections}) => (
	<CollectionOverviewContainer>
	{
		collections.map(({id,...otherCollectionProps}) => (
			<CollectionPreview key={id} {...otherCollectionProps} />
		))
	}

	</CollectionOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)