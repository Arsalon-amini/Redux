import React from "react";
import "./App.css";
import configureStore from "./store/configureStore";
import { Provider } from 'react-redux'; 
import Bugs from "./components/Bugs";
import BugsList from './components/bugsList';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BugsList />
    </Provider>
  );
}

export default App;
