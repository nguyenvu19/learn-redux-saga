import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import A from "./A";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <A />
      </div>
    </Provider>
  );
}

export default App;
