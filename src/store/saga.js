import { spawn } from "redux-saga/effects"
import { saga as AuthSaga } from "./auth/auth.sagas"

export default function* saga() {
  yield spawn(AuthSaga)
}
