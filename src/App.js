import React from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import LandingPage from "./components/layouts/LandingPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PizzaComponent from "./pizzaComponent";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <PizzaComponent />
      </div>
    </Provider>

    // <BrowserRouter>
    //   <Navbar />
    //   <Route exact path="/" component={LandingPage} />
    //   <section>
    //     <Switch>
    //       <Route exact path="/register" component={Register} />
    //       <Route exact path="/login" component={Login} />
    //     </Switch>
    //   </section>
    // </BrowserRouter>
  );
}

export default App;
