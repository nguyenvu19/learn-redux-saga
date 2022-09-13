import {
  delay,
  fork,
  put,
  select,
  spawn,
  take,
  takeEvery,
  takeLatest,
  takeLeading,
} from "redux-saga/effects";
import * as Actions from "./actions";

export function* watcherStudent() {
  yield takeEvery(Actions.action, workerAction);
  //   yield takeLeading(Actions.TEST_TAKE_LEADING, workerTestTakeLeading);
  yield takeLatest(Actions.TEST_TAKE_LATEST, workerTestTakeLatest);
  yield takeEvery(Actions.TEST_TAKE_EVERY, workerTestTakeEvery);
  yield takeEvery(Actions.TEST_YIELD_PUT, workerTestYieldPut);
  yield takeEvery(Actions.TEST_YIELD_SPAWN_FORK, workerTestYieldSpawnFork);
}

function workerAction(action) {
  try {
    console.log("Toi dang o action ");
  } catch (error) {}
}

// function* workerTestTakeLeading(action) {
//   try {
//     yield delay(2000);
//     console.log("Toi dang o workerTestTakeLeading");
//   } catch (error) {}
// }

function* workerTestTakeLatest(action) {
  try {
    yield delay(2000);
    console.log("Toi dang o workerTestTakeLatest");
  } catch (error) {}
}

function* workerTestTakeEvery(action) {
  try {
    // const varStudent = yield select((state) => state.studentReducer.students);
    // console.log("student:", varStudent);

    yield put({
      type: Actions.TEST_YIELD_PUT,
    });

    let res = yield take(Actions.TEST_YIELD_TAKE);
    console.log(res);
  } catch (error) {}
}

function* workerTestYieldPut(action) {
  try {
    console.log("Toi dang o yield put");

    yield put({
      type: Actions.TEST_YIELD_TAKE,
      data: {
        myNicename: "i'will become the best",
      },
    });
  } catch (error) {}
}

function* workerTestYieldSpawnFork(action) {
  try {
    yield fork(workerSpawnOrForkIt, {});
    yield spawn(workerSpawnOrForkIt, {});
    console.log("toi dang o workerTestYieldSpawnFork");
  } catch (error) {}
}

function* workerSpawnOrForkIt(action) {
  try {
    yield delay(1000);
    console.log(" toi dang o workerSpawnOrForkIt");
  } catch (error) {}
}
