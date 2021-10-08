import { Provider } from "react-redux";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import ToyContainer from "./components/ToyContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <IceCreamContainer />
        <ToyContainer />
      </div>
    </Provider>
  );
}

export default App;
