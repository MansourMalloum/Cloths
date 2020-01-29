import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage.component";
import ShopPage from "./pages/shop/shopPage.component.jsx";
import Header from "./components/header/header.component.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentuser: null
    };
  }
  authSubscription = null;
  componentDidMount() {
    this.authSubscription = auth.onAuthStateChanged(async userAuth => {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapshot => {
        this.setState(
          {
            currentuser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
      });
      this.setState({ currentuser: userAuth })
    });
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  render() {
    return (
      <div>
        <Header currentuser={this.state.currentuser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
