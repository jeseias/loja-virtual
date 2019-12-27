import React from 'react'
import { connect } from 'react-redux'

// Components
import CollectionItem from '../../Components/Collection-item/CollectionItem'

// Redux
import { selectCollections } from '../../redux/shop/shop.selectors'

import './styles.scss'

const CollectionPage = ({ collection }) => 
  <div className="collection-page">
    <h2>Collectionpage Page</h2>
  </div>

const mapStateToProps = ({ state, ownProps }) => ({
  collection: selectCollections(ownProps.match.params.collectionId)(state)
})  

export default connect(mapStateToProps)(CollectionPage)