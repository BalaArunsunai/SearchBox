import { put, takeLatest, all } from "redux-saga/effects";
function* fetchNews() {
//   const json = yield fetch("./tweets.txt").then((response) => response.text());
  yield put({ type: "GET_NEWS", json: "json" });
}
// function* actionWatcher() {
//   yield takeLatest("GET_NEWS", fetchNews);
// }
export default function* rootSaga() {
  yield all([fetchNews()]);     
}
