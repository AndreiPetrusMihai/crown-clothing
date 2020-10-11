import React from 'react';
import {Route} from 'react-router';
import {connect} from "react-redux";

import CollectionPage from '../collection/collection.component.jsx';
import CollectionOverview from '../../components/collection-overview/collection-overview.component.jsx';
import {convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";
import {firestore} from "../../firebase/firebase.utils";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import {updateCollections} from "../../redux/shop/shop.actions";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

	state = {
		isLoading : true
	};

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const {updateCollections} = this.props;
		const collectionRef = firestore.collection('collections');

		collectionRef.get().then(snapshot =>{
			const collectionMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionMap);
			this.setState({isLoading : false});
		});
	}

	render(){
		const {match} = this.props;
		const {isLoading} = this.state;
		return (
			<div className='shop-page'>

				<Route
					exact
					path={`${match.path}`}
					render={(props) =>
						(<CollectionOverviewWithSpinner isLoading={isLoading} {...props}/>
					)}
				/>

				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner isLoading={isLoading} {...props}/>
					)}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap)),
})

export default connect(null,mapDispatchToProps)(ShopPage);