import {setViewListAction} from '../actions/presentationActions'

const initialState = {isHidden : false};

export const presentation = (state = initialState, action) => {
    switch (action.type) {
        case setViewListAction:
            if(action.isHidden)
                return Object.assign({},state, {isHidden:true});
            else
                return Object.assign({},state, {isHidden:false});
        default:
            return state;
    }

};
