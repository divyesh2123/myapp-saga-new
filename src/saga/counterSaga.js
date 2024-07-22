import {delay, put, takeLatest} from 'redux-saga/effects'
import { INC } from '../actions/counterAction';

function* asycINC()
{

    yield delay(2000);

    yield put(INC())

}

export function* watchCounter()
{

    yield takeLatest('ABC_INC',asycINC)
}