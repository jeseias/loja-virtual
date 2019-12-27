import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// Components
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview'

// Redux
import { selectCollections } from '../../redux/shop/shop.selectors'

import './styles.scss'

const CollectionOverviews = ({ collections }) => 
  <div className="collection-overviews">
    {collections.map(({id, ...otherCollectionProps}) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});  

export default connect(mapStateToProps)(CollectionOverviews)