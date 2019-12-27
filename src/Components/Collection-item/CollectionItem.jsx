import React from 'react'

// Redux
import { connect } from 'react-redux'
import { addItems } from '../../redux/cart/cart.actions'

// Components
import CustomButton from '../CustomButton/CustumButton'

// Styles
import './styles.scss'

const CollectionItem = ({ item, addItems }) => {

  const { imageUrl, name, price } = item

  return (
    <div className="collection-item"> 
      <div
        className="image"
        style={{backgroundImage: `url(${imageUrl})`}}
      /> 
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItems(item)} inverted>
        Add To Cart
      </CustomButton>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItems: item => dispatch(addItems(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)