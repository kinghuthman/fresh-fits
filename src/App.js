import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.util'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  // need to close the subscription to prevent memory leaks when the component is unmounted
  unsubscribeFromAuth = null;

  componentDidMount() {
    // from the auth library.. takes a function where the parameter is the state of the user, firebase keeps track of all the instances of the application that are open and communicating with it, therefore if a page is closed or refresh, a user will still be signed in until they sign out or are timed out thanks to the open subscription.  
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user)
    })
  }

  componentWillUnmount() {
    // close the subscription whenever the component unmounts
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div>
        {/**header is always present on all pages*/}
        <Header currentUser={this.state.currentUser} />
        {/**switch finds a match within the path and does not render anything else but that path  */}
        <Switch>
          <Route exact path = '/' component={Homepage} />
          <Route path = '/shop' component={ShopPage} />
          <Route path = '/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
 