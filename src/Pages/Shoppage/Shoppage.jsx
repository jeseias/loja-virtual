import React from 'react' 
import { Route } from 'react-router-dom'
 
// Components
import CollectionOverview from '../../Components/collections-overview/CollectionOverview'

//Pages
import CollectionPage from '../Collection/Colllection'

const ShopPage = ({ match }) =>  
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionOverview}/>
      <Route path={`${match.path}/:collectionId`} components={CollectionPage}/>
    </div> 



export default ShopPage