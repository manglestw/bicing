import {getStationsAction} from '../actions/bicingActions'

const initialState = {bicingJson : []};

export const bicing = (state = initialState, action) => {
    switch (action.type) {
        case "GET_STATIONS_SUCCESS":
            return Object.assign({}, state, {bicingJson:action.bicingjson})

    }
    return state;
};

