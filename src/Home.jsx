import React from "react";
import Navigation from "./Navigation";
import { Provider } from "react-redux";
import store from "./store";
store.subscribe(() => console.log(store.getState()));

const Home = () => {
  return (
    <>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
};
export default Home;
