import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {

  // need to close the subscription to prevent memory leaks when the component is unmounted
  unsubscribeFromAuth = null;

  componentDidMount() {
    // destructured setCurrentUser
    const {setCurrentUser} = this.props

    /* from the auth library.. takes a function where the parameter is the state 
    of the user, firebase keeps track of all the instances of the application 
    that are open and communicating with it, therefore if a page is closed or 
    refresh, a user will still be signed in until they sign out or are timed 
    out thanks to the open subscription. */
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // user is signed in
      if(userAuth){
        // function returns userRef to use anywhere in app
        const userRef = await createUserProfileDocument(userAuth);
        // will return a snapshot object representing the data that is currently stored in the database
        userRef.onSnapshot(snapShot => {
          // pass down props from the users actions to modify user state
            setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            })  
        });
        
      } 
        // user is signed out
        setCurrentUser(userAuth);
      
    });
  }

  componentWillUnmount() {
    // close the subscription whenever the component unmounts
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div>
        {/**header is always present on all pages*/}
        <Header />
        {/**switch finds a match within the path and does not render anything else 
        but that path  */}
        <Switch>
          <Route exact path = '/' component={Homepage} />
          <Route path = '/shop' component={ShopPage} />
          {/** if user is signed in redirect to home page else 
          signinSignUpPage */}
          <Route 
            exact 
            path = '/signin' 
            render={() => 
              this.props.currentUser ? (
              <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            } 
          />
        </Switch>
      </div>
    );
  }
}

// grab the current user from the redux state
const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
})

/** 
  * action will go to a function that gets the user object  
  * whatever action passed into dispatch will be an action object passed to every
reducer 
  * user action is a function that returns a user object
  */
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

/** 
  * connect the app to the outcome of the initial connect call using the second 
argument of connect which is mapDispatchToProps
  * null as the first argument for connect as we don't need state to props from 
  the reducer
  * second argument is the mapDispatchToProps function
  * mapStateToProps give us access to this.props.currentUser
*/ 
export default connect(mapStateToProps, mapDispatchToProps)(App);
 