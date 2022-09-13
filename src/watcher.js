import { all } from "redux-saga/effects";
import { watcherStudent } from "./watcherStudent";

export default function* rootWatcher() {
  yield all([watcherStudent()]);
}
