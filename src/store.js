import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootWatcher from "./watcher";
import reducer from "./reducer";

// Tạo saga vào apply middleware saga vào store
const saga = createSagaMiddleware();
const middleWares = [saga];
const store = createStore(reducer, applyMiddleware(...middleWares));

saga.run(rootWatcher);
export default store;
