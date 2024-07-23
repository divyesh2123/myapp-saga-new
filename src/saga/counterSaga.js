import {delay, put, takeEvery, takeLatest} from 'redux-saga/effects'
import { INC } from '../actions/counterAction';

function* asycINC()
{

    yield delay(2000);

    yield put(INC())

}

export function* watchCounter()
{

    yield takeEvery('ABC_INC',asycINC)
}