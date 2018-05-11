import {put, call, takeEvery} from 'redux-saga/effects'
import axios from 'axios'
import {getStationsAction} from './../actions/bicingActions';
import {setViewList} from './../actions/presentationActions';

const getBicis = () =>{
        return new Promise((resolve,reject) => {

            axios.get(`http://localhost:3001/stations`)
                .then(function (jsonStation) {
                    console.log("primero");
                    resolve(jsonStation);
                }).catch((error) => {
                reject("Bicing stating fetch didn't work well")
            });

        });

}

function* getBicingStation() {

    try {
        yield put({type: "GET_STATIONS_REQUEST"});
        const bicingjson = yield call(getBicis);
        yield put({type: "GET_STATIONS_SUCCESS",bicingjson:bicingjson.data});
        yield put(setViewList(true));


    }
    catch (ex) {
        yield put({type: "GET_STATIONS_ERROR", message: ex.message});
    }
}


export function* watcher() {
    yield takeEvery(getStationsAction, getBicingStation);
}
