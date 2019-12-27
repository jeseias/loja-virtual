import React from 'react'; 
import { Route, Switch, Redirect } from 'react-router-dom'

// Redux
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'

import { setCurrentUser } from './redux/user/user.action'
import { selectCurrentUser } from './redux/user/user.selector'


// Pages
import Homepage from './Pages/homepage/homepage'
import ShopPage from './Pages/Shoppage/Shoppage' 
import SignInUp from './Pages/SignInUp/SignInUp'
import CheckOutPage from './Pages/checkoutpage/CheckOutPage'

//Fire base
import { auth, createUserProfileDocument } from './firebase/firebase.util'

// Components
import Header from './Components/Header/Header'

// Styles
import './App.css';

class App extends React.Component {  

  unSubcribeFromAuth = null

  componentDidMount(){

    const { setCurrentUser   } = this.props

    this.unSubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth) 

        userRef.onSnapshot( snapShot => {
          setCurrentUser({ 
            id: snapShot.id,
            ...snapShot.data() 
          }) 
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount(){
    this.unSubcribeFromAuth()
  }

  render() { 
    return (
      <div>
        <Header />
        <Switch> 
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckOutPage}/>   
          <Route exact path='/signin' render={() => 
            this.props.currentUser ? <Redirect to='/'/> : <SignInUp />}
            />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
