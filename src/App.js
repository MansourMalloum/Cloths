import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./pages/homepage.component";
import ShopPage from "./pages/shop/shopPage.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/userActions";
import { connect } from "react-redux";




class App extends React.Component {
  authSubscription = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.authSubscription = auth.onAuthStateChanged(async userAuth => {
      console.log(userAuth, "before");
      const userRef = await createUserProfileDocument(userAuth);
      console.log(userRef, "after");

      if (userRef) {
        userRef.onSnapshot(snapshot => {
          console.log(snapshot.data(), "snapshot");
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        //
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            exact
            path='/signin'
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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
