import {call, delay, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {UserFailed, UserRequest, UserSuc} from '../actions/userAction'
import { getUserService } from '../service/userService'
function* asycUser()
{
    try
    {
       let p= yield call(getUserService)
       yield put(UserSuc(p));
    }
    catch(err)
    {
        yield put(UserFailed(err))
    }

}

export function* watchUser()
{

    yield takeLatest(UserRequest().type,asycUser)
}